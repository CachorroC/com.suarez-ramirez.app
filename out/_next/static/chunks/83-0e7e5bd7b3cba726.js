(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [83],
  {
    5415: function (e, t) {
      "use strict";
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            o = u(e),
            s = o[0],
            a = o[1],
            l = new i(((s + a) * 3) / 4 - a),
            c = 0,
            h = a > 0 ? s - 4 : s;
          for (r = 0; r < h; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (l[c++] = (t >> 16) & 255),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t);
          return (
            2 === a &&
              ((t =
                (n[e.charCodeAt(r)] << 2) |
                (n[e.charCodeAt(r + 1)] >> 4)),
              (l[c++] = 255 & t)),
            1 === a &&
              ((t =
                (n[e.charCodeAt(r)] << 10) |
                (n[e.charCodeAt(r + 1)] << 4) |
                (n[e.charCodeAt(r + 2)] >> 2)),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t)),
            l
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t,
              n = e.length,
              i = n % 3,
              o = [],
              s = 0,
              a = n - i;
            s < a;
            s += 16383
          )
            o.push(
              (function (e, t, n) {
                for (var i, o = [], s = t; s < n; s += 3)
                  o.push(
                    r[
                      ((i =
                        ((e[s] << 16) & 16711680) +
                        ((e[s + 1] << 8) & 65280) +
                        (255 & e[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join("");
              })(e, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === i
              ? o.push(
                  r[(t = e[n - 1]) >> 2] +
                    r[(t << 4) & 63] +
                    "=="
                )
              : 2 === i &&
                o.push(
                  r[
                    (t = (e[n - 2] << 8) + e[n - 1]) >> 10
                  ] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var r = [],
          n = [],
          i =
            "undefined" != typeof Uint8Array
              ? Uint8Array
              : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error(
            "Invalid string. Length must be a multiple of 4"
          );
        var r = e.indexOf("=");
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62),
        (n["_".charCodeAt(0)] = 63);
    },
    7330: function (e, t, r) {
      "use strict";
      let { Buffer: n } = r(1620),
        i = Symbol.for("BufferList");
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        o._init.call(this, e);
      }
      (o._init = function (e) {
        Object.defineProperty(this, i, { value: !0 }),
          (this._bufs = []),
          (this.length = 0),
          e && this.append(e);
      }),
        (o.prototype._new = function (e) {
          return new o(e);
        }),
        (o.prototype._offset = function (e) {
          if (0 === e) return [0, 0];
          let t = 0;
          for (let r = 0; r < this._bufs.length; r++) {
            let n = t + this._bufs[r].length;
            if (e < n || r === this._bufs.length - 1)
              return [r, e - t];
            t = n;
          }
        }),
        (o.prototype._reverseOffset = function (e) {
          let t = e[0],
            r = e[1];
          for (let e = 0; e < t; e++)
            r += this._bufs[e].length;
          return r;
        }),
        (o.prototype.get = function (e) {
          if (e > this.length || e < 0) return;
          let t = this._offset(e);
          return this._bufs[t[0]][t[1]];
        }),
        (o.prototype.slice = function (e, t) {
          return (
            "number" == typeof e &&
              e < 0 &&
              (e += this.length),
            "number" == typeof t &&
              t < 0 &&
              (t += this.length),
            this.copy(null, 0, e, t)
          );
        }),
        (o.prototype.copy = function (e, t, r, i) {
          if (
            (("number" != typeof r || r < 0) && (r = 0),
            ("number" != typeof i || i > this.length) &&
              (i = this.length),
            r >= this.length || i <= 0)
          )
            return e || n.alloc(0);
          let o = !!e,
            s = this._offset(r),
            a = i - r,
            u = a,
            l = (o && t) || 0,
            c = s[1];
          if (0 === r && i === this.length) {
            if (!o)
              return 1 === this._bufs.length
                ? this._bufs[0]
                : n.concat(this._bufs, this.length);
            for (let t = 0; t < this._bufs.length; t++)
              this._bufs[t].copy(e, l),
                (l += this._bufs[t].length);
            return e;
          }
          if (u <= this._bufs[s[0]].length - c)
            return o
              ? this._bufs[s[0]].copy(e, t, c, c + u)
              : this._bufs[s[0]].slice(c, c + u);
          o || (e = n.allocUnsafe(a));
          for (let t = s[0]; t < this._bufs.length; t++) {
            let r = this._bufs[t].length - c;
            if (u > r)
              this._bufs[t].copy(e, l, c), (l += r);
            else {
              this._bufs[t].copy(e, l, c, c + u), (l += r);
              break;
            }
            (u -= r), c && (c = 0);
          }
          return e.length > l ? e.slice(0, l) : e;
        }),
        (o.prototype.shallowSlice = function (e, t) {
          if (
            ((e = e || 0),
            (t = "number" != typeof t ? this.length : t),
            e < 0 && (e += this.length),
            t < 0 && (t += this.length),
            e === t)
          )
            return this._new();
          let r = this._offset(e),
            n = this._offset(t),
            i = this._bufs.slice(r[0], n[0] + 1);
          return (
            0 === n[1]
              ? i.pop()
              : (i[i.length - 1] = i[i.length - 1].slice(
                  0,
                  n[1]
                )),
            0 !== r[1] && (i[0] = i[0].slice(r[1])),
            this._new(i)
          );
        }),
        (o.prototype.toString = function (e, t, r) {
          return this.slice(t, r).toString(e);
        }),
        (o.prototype.consume = function (e) {
          if (Number.isNaN((e = Math.trunc(e))) || e <= 0)
            return this;
          for (; this._bufs.length; )
            if (e >= this._bufs[0].length)
              (e -= this._bufs[0].length),
                (this.length -= this._bufs[0].length),
                this._bufs.shift();
            else {
              (this._bufs[0] = this._bufs[0].slice(e)),
                (this.length -= e);
              break;
            }
          return this;
        }),
        (o.prototype.duplicate = function () {
          let e = this._new();
          for (let t = 0; t < this._bufs.length; t++)
            e.append(this._bufs[t]);
          return e;
        }),
        (o.prototype.append = function (e) {
          if (null == e) return this;
          if (e.buffer)
            this._appendBuffer(
              n.from(e.buffer, e.byteOffset, e.byteLength)
            );
          else if (Array.isArray(e))
            for (let t = 0; t < e.length; t++)
              this.append(e[t]);
          else if (this._isBufferList(e))
            for (let t = 0; t < e._bufs.length; t++)
              this.append(e._bufs[t]);
          else
            "number" == typeof e && (e = e.toString()),
              this._appendBuffer(n.from(e));
          return this;
        }),
        (o.prototype._appendBuffer = function (e) {
          this._bufs.push(e), (this.length += e.length);
        }),
        (o.prototype.indexOf = function (e, t, r) {
          if (
            (void 0 === r &&
              "string" == typeof t &&
              ((r = t), (t = void 0)),
            "function" == typeof e || Array.isArray(e))
          )
            throw TypeError(
              'The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'
            );
          if (
            ("number" == typeof e
              ? (e = n.from([e]))
              : "string" == typeof e
              ? (e = n.from(e, r))
              : this._isBufferList(e)
              ? (e = e.slice())
              : Array.isArray(e.buffer)
              ? (e = n.from(
                  e.buffer,
                  e.byteOffset,
                  e.byteLength
                ))
              : n.isBuffer(e) || (e = n.from(e)),
            isNaN((t = Number(t || 0))) && (t = 0),
            t < 0 && (t = this.length + t),
            t < 0 && (t = 0),
            0 === e.length)
          )
            return t > this.length ? this.length : t;
          let i = this._offset(t),
            o = i[0],
            s = i[1];
          for (; o < this._bufs.length; o++) {
            let t = this._bufs[o];
            for (; s < t.length; ) {
              let r = t.length - s;
              if (r >= e.length) {
                let r = t.indexOf(e, s);
                if (-1 !== r)
                  return this._reverseOffset([o, r]);
                s = t.length - e.length + 1;
              } else {
                let t = this._reverseOffset([o, s]);
                if (this._match(t, e)) return t;
                s++;
              }
            }
            s = 0;
          }
          return -1;
        }),
        (o.prototype._match = function (e, t) {
          if (this.length - e < t.length) return !1;
          for (let r = 0; r < t.length; r++)
            if (this.get(e + r) !== t[r]) return !1;
          return !0;
        }),
        (function () {
          let e = {
            readDoubleBE: 8,
            readDoubleLE: 8,
            readFloatBE: 4,
            readFloatLE: 4,
            readInt32BE: 4,
            readInt32LE: 4,
            readUInt32BE: 4,
            readUInt32LE: 4,
            readInt16BE: 2,
            readInt16LE: 2,
            readUInt16BE: 2,
            readUInt16LE: 2,
            readInt8: 1,
            readUInt8: 1,
            readIntBE: null,
            readIntLE: null,
            readUIntBE: null,
            readUIntLE: null,
          };
          for (let t in e)
            !(function (t) {
              null === e[t]
                ? (o.prototype[t] = function (e, r) {
                    return this.slice(e, e + r)[t](0, r);
                  })
                : (o.prototype[t] = function (r = 0) {
                    return this.slice(r, r + e[t])[t](0);
                  });
            })(t);
        })(),
        (o.prototype._isBufferList = function (e) {
          return e instanceof o || o.isBufferList(e);
        }),
        (o.isBufferList = function (e) {
          return null != e && e[i];
        }),
        (e.exports = o);
    },
    3163: function (e, t, r) {
      "use strict";
      let n = r(3745).Duplex,
        i = r(2937),
        o = r(7330);
      function s(e) {
        if (!(this instanceof s)) return new s(e);
        if ("function" == typeof e) {
          this._callback = e;
          let t = function (e) {
            this._callback &&
              (this._callback(e), (this._callback = null));
          }.bind(this);
          this.on("pipe", function (e) {
            e.on("error", t);
          }),
            this.on("unpipe", function (e) {
              e.removeListener("error", t);
            }),
            (e = null);
        }
        o._init.call(this, e), n.call(this);
      }
      i(s, n),
        Object.assign(s.prototype, o.prototype),
        (s.prototype._new = function (e) {
          return new s(e);
        }),
        (s.prototype._write = function (e, t, r) {
          this._appendBuffer(e),
            "function" == typeof r && r();
        }),
        (s.prototype._read = function (e) {
          if (!this.length) return this.push(null);
          (e = Math.min(e, this.length)),
            this.push(this.slice(0, e)),
            this.consume(e);
        }),
        (s.prototype.end = function (e) {
          n.prototype.end.call(this, e),
            this._callback &&
              (this._callback(null, this.slice()),
              (this._callback = null));
        }),
        (s.prototype._destroy = function (e, t) {
          (this._bufs.length = 0), (this.length = 0), t(e);
        }),
        (s.prototype._isBufferList = function (e) {
          return (
            e instanceof s ||
            e instanceof o ||
            s.isBufferList(e)
          );
        }),
        (s.isBufferList = o.isBufferList),
        (e.exports = s),
        (e.exports.BufferListStream = s),
        (e.exports.BufferList = o);
    },
    1620: function (e, t, r) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ var n = r(5415),
        i = r(551),
        o =
          "function" == typeof Symbol &&
          "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(e) {
        if (e > 2147483647)
          throw RangeError(
            'The value "' +
              e +
              '" is invalid for option "size"'
          );
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, a.prototype), t;
      }
      function a(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(e);
        }
        return u(e, t, r);
      }
      function u(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            if (
              (("string" != typeof t || "" === t) &&
                (t = "utf8"),
              !a.isEncoding(t))
            )
              throw TypeError("Unknown encoding: " + t);
            var r = 0 | d(e, t),
              n = s(r),
              i = n.write(e, t);
            return i !== r && (n = n.slice(0, i)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (P(e, Uint8Array)) {
              var t = new Uint8Array(e);
              return f(
                t.buffer,
                t.byteOffset,
                t.byteLength
              );
            }
            return h(e);
          })(e);
        if (null == e)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        if (
          P(e, ArrayBuffer) ||
          (e && P(e.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (P(e, SharedArrayBuffer) ||
              (e && P(e.buffer, SharedArrayBuffer))))
        )
          return f(e, t, r);
        if ("number" == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return a.from(n, t, r);
        var i = (function (e) {
          if (a.isBuffer(e)) {
            var t,
              r = 0 | p(e.length),
              n = s(r);
            return 0 === n.length || e.copy(n, 0, 0, r), n;
          }
          return void 0 !== e.length
            ? "number" != typeof e.length ||
              (t = e.length) != t
              ? s(0)
              : h(e)
            : "Buffer" === e.type && Array.isArray(e.data)
            ? h(e.data)
            : void 0;
        })(e);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return a.from(
            e[Symbol.toPrimitive]("string"),
            t,
            r
          );
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e
        );
      }
      function l(e) {
        if ("number" != typeof e)
          throw TypeError(
            '"size" argument must be of type number'
          );
        if (e < 0)
          throw RangeError(
            'The value "' +
              e +
              '" is invalid for option "size"'
          );
      }
      function c(e) {
        return l(e), s(e < 0 ? 0 : 0 | p(e));
      }
      function h(e) {
        for (
          var t = e.length < 0 ? 0 : 0 | p(e.length),
            r = s(t),
            n = 0;
          n < t;
          n += 1
        )
          r[n] = 255 & e[n];
        return r;
      }
      function f(e, t, r) {
        var n;
        if (t < 0 || e.byteLength < t)
          throw RangeError(
            '"offset" is outside of buffer bounds'
          );
        if (e.byteLength < t + (r || 0))
          throw RangeError(
            '"length" is outside of buffer bounds'
          );
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
            a.prototype
          ),
          n
        );
      }
      function p(e) {
        if (e >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | e;
      }
      function d(e, t) {
        if (a.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || P(e, ArrayBuffer))
          return e.byteLength;
        if ("string" != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        var r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var i = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return I(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return C(e).length;
            default:
              if (i) return n ? -1 : I(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function g(e, t, r) {
        var i,
          o,
          s = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) &&
              (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return (function (e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0),
                  (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = t; o < r; ++o)
                  i += x[e[o]];
                return i;
              })(this, t, r);
            case "utf8":
            case "utf-8":
              return v(this, t, r);
            case "ascii":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                  n += String.fromCharCode(127 & e[i]);
                return n;
              })(this, t, r);
            case "latin1":
            case "binary":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                  n += String.fromCharCode(e[i]);
                return n;
              })(this, t, r);
            case "base64":
              return (
                (i = t),
                (o = r),
                0 === i && o === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(i, o))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, t, r) {
                for (
                  var n = e.slice(t, r), i = "", o = 0;
                  o < n.length - 1;
                  o += 2
                )
                  i += String.fromCharCode(
                    n[o] + 256 * n[o + 1]
                  );
                return i;
              })(this, t, r);
            default:
              if (s)
                throw TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (s = !0);
          }
      }
      function y(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function b(e, t, r, n, i) {
        var o;
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (o = r = +r) != o && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (
          ("string" == typeof t && (t = a.from(t, n)),
          a.isBuffer(t))
        )
          return 0 === t.length ? -1 : m(e, t, r, n, i);
        if ("number" == typeof t)
          return ((t &= 255),
          "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(
                  e,
                  t,
                  r
                )
            : m(e, [t], r, n, i);
        throw TypeError(
          "val must be string, number or Buffer"
        );
      }
      function m(e, t, r, n, i) {
        var o,
          s = 1,
          a = e.length,
          u = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function l(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (i) {
          var c = -1;
          for (o = r; o < a; o++)
            if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === u))
                return c * s;
            } else -1 !== c && (o -= o - c), (c = -1);
        } else
          for (
            r + u > a && (r = a - u), o = r;
            o >= 0;
            o--
          ) {
            for (var h = !0, f = 0; f < u; f++)
              if (l(e, o + f) !== l(t, f)) {
                h = !1;
                break;
              }
            if (h) return o;
          }
        return -1;
      }
      function v(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], i = t; i < r; ) {
          var o,
            s,
            a,
            u,
            l = e[i],
            c = null,
            h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
          if (i + h <= r)
            switch (h) {
              case 1:
                l < 128 && (c = l);
                break;
              case 2:
                (192 & (o = e[i + 1])) == 128 &&
                  (u = ((31 & l) << 6) | (63 & o)) > 127 &&
                  (c = u);
                break;
              case 3:
                (o = e[i + 1]),
                  (s = e[i + 2]),
                  (192 & o) == 128 &&
                    (192 & s) == 128 &&
                    (u =
                      ((15 & l) << 12) |
                      ((63 & o) << 6) |
                      (63 & s)) > 2047 &&
                    (u < 55296 || u > 57343) &&
                    (c = u);
                break;
              case 4:
                (o = e[i + 1]),
                  (s = e[i + 2]),
                  (a = e[i + 3]),
                  (192 & o) == 128 &&
                    (192 & s) == 128 &&
                    (192 & a) == 128 &&
                    (u =
                      ((15 & l) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (c = u);
            }
          null === c
            ? ((c = 65533), (h = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (i += h);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096)
            return String.fromCharCode.apply(String, e);
          for (var r = "", n = 0; n < t; )
            r += String.fromCharCode.apply(
              String,
              e.slice(n, (n += 4096))
            );
          return r;
        })(n);
      }
      function _(e, t, r) {
        if (e % 1 != 0 || e < 0)
          throw RangeError("offset is not uint");
        if (e + t > r)
          throw RangeError(
            "Trying to access beyond buffer length"
          );
      }
      function w(e, t, r, n, i, o) {
        if (!a.isBuffer(e))
          throw TypeError(
            '"buffer" argument must be a Buffer instance'
          );
        if (t > i || t < o)
          throw RangeError(
            '"value" argument is out of bounds'
          );
        if (r + n > e.length)
          throw RangeError("Index out of range");
      }
      function S(e, t, r, n, i, o) {
        if (r + n > e.length || r < 0)
          throw RangeError("Index out of range");
      }
      function E(e, t, r, n, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o ||
            S(
              e,
              t,
              r,
              4,
              34028234663852886e22,
              -34028234663852886e22
            ),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function k(e, t, r, n, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o ||
            S(
              e,
              t,
              r,
              8,
              17976931348623157e292,
              -17976931348623157e292
            ),
          i.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (t.Buffer = a),
        (t.SlowBuffer = function (e) {
          return +e != e && (e = 0), a.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (t.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(
                t,
                Uint8Array.prototype
              ),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (e, t, r) {
          return u(e, t, r);
        }),
        Object.setPrototypeOf(
          a.prototype,
          Uint8Array.prototype
        ),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (e, t, r) {
          return (l(e), e <= 0)
            ? s(e)
            : void 0 !== t
            ? "string" == typeof r
              ? s(e).fill(t, r)
              : s(e).fill(t)
            : s(e);
        }),
        (a.allocUnsafe = function (e) {
          return c(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          return c(e);
        }),
        (a.isBuffer = function (e) {
          return (
            null != e &&
            !0 === e._isBuffer &&
            e !== a.prototype
          );
        }),
        (a.compare = function (e, t) {
          if (
            (P(e, Uint8Array) &&
              (e = a.from(e, e.offset, e.byteLength)),
            P(t, Uint8Array) &&
              (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(e) || !a.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          for (
            var r = e.length,
              n = t.length,
              i = 0,
              o = Math.min(r, n);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (e, t) {
          if (!Array.isArray(e))
            throw TypeError(
              '"list" argument must be an Array of Buffers'
            );
          if (0 === e.length) return a.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r)
              t += e[r].length;
          var r,
            n = a.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            var o = e[r];
            if (P(o, Uint8Array))
              i + o.length > n.length
                ? a.from(o).copy(n, i)
                : Uint8Array.prototype.set.call(n, o, i);
            else if (a.isBuffer(o)) o.copy(n, i);
            else
              throw TypeError(
                '"list" argument must be an Array of Buffers'
              );
            i += o.length;
          }
          return n;
        }),
        (a.byteLength = d),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw RangeError(
              "Buffer size must be a multiple of 16-bits"
            );
          for (var t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw RangeError(
              "Buffer size must be a multiple of 32-bits"
            );
          for (var t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw RangeError(
              "Buffer size must be a multiple of 64-bits"
            );
          for (var t = 0; t < e; t += 8)
            y(this, t, t + 7),
              y(this, t + 1, t + 6),
              y(this, t + 2, t + 5),
              y(this, t + 3, t + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          var e = this.length;
          return 0 === e
            ? ""
            : 0 == arguments.length
            ? v(this, 0, e)
            : g.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (e) {
          if (!a.isBuffer(e))
            throw TypeError("Argument must be a Buffer");
          return this === e || 0 === a.compare(this, e);
        }),
        (a.prototype.inspect = function () {
          var e = "",
            r = t.INSPECT_MAX_BYTES;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        o && (a.prototype[o] = a.prototype.inspect),
        (a.prototype.compare = function (e, t, r, n, i) {
          if (
            (P(e, Uint8Array) &&
              (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 ||
              r > e.length ||
              n < 0 ||
              i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (
            ((t >>>= 0),
            (r >>>= 0),
            (n >>>= 0),
            (i >>>= 0),
            this === e)
          )
            return 0;
          for (
            var o = i - n,
              s = r - t,
              u = Math.min(o, s),
              l = this.slice(n, i),
              c = e.slice(t, r),
              h = 0;
            h < u;
            ++h
          )
            if (l[h] !== c[h]) {
              (o = l[h]), (s = c[h]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (a.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (a.prototype.indexOf = function (e, t, r) {
          return b(this, e, t, r, !0);
        }),
        (a.prototype.lastIndexOf = function (e, t, r) {
          return b(this, e, t, r, !1);
        }),
        (a.prototype.write = function (e, t, r, n) {
          if (void 0 === t)
            (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          var i,
            o,
            s,
            a,
            u,
            l,
            c,
            h,
            f = this.length - t;
          if (
            ((void 0 === r || r > f) && (r = f),
            (e.length > 0 && (r < 0 || t < 0)) ||
              t > this.length)
          )
            throw RangeError(
              "Attempt to write outside buffer bounds"
            );
          n || (n = "utf8");
          for (var p = !1; ; )
            switch (n) {
              case "hex":
                return (function (e, t, r, n) {
                  r = Number(r) || 0;
                  var i = e.length - r;
                  n
                    ? (n = Number(n)) > i && (n = i)
                    : (n = i);
                  var o = t.length;
                  n > o / 2 && (n = o / 2);
                  for (var s = 0; s < n; ++s) {
                    var a = parseInt(
                      t.substr(2 * s, 2),
                      16
                    );
                    if (a != a) break;
                    e[r + s] = a;
                  }
                  return s;
                })(this, e, t, r);
              case "utf8":
              case "utf-8":
                return (
                  (i = t),
                  (o = r),
                  T(I(e, this.length - i), this, i, o)
                );
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = t),
                  (a = r),
                  T(
                    (function (e) {
                      for (
                        var t = [], r = 0;
                        r < e.length;
                        ++r
                      )
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (
                  (u = t), (l = r), T(C(e), this, u, l)
                );
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (c = t),
                  (h = r),
                  T(
                    (function (e, t) {
                      for (
                        var r, n, i = [], o = 0;
                        o < e.length && !((t -= 2) < 0);
                        ++o
                      )
                        (n = (r = e.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(e, this.length - c),
                    this,
                    c,
                    h
                  )
                );
              default:
                if (p)
                  throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (p = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(
              this._arr || this,
              0
            ),
          };
        }),
        (a.prototype.slice = function (e, t) {
          var r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            t < 0
              ? (t += r) < 0 && (t = 0)
              : t > r && (t = r),
            t < e && (t = e);
          var n = this.subarray(e, t);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0),
              (t >>>= 0),
              r || _(e, t, this.length);
            for (
              var n = this[e], i = 1, o = 0;
              ++o < t && (i *= 256);

            )
              n += this[e + o] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0),
              (t >>>= 0),
              r || _(e, t, this.length);
            for (
              var n = this[e + --t], i = 1;
              t > 0 && (i *= 256);

            )
              n += this[e + --t] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (e, t) {
            return (
              (e >>>= 0), t || _(e, 1, this.length), this[e]
            );
          }),
        (a.prototype.readUint16LE =
          a.prototype.readUInt16LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || _(e, 2, this.length),
                this[e] | (this[e + 1] << 8)
              );
            }),
        (a.prototype.readUint16BE =
          a.prototype.readUInt16BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || _(e, 2, this.length),
                (this[e] << 8) | this[e + 1]
              );
            }),
        (a.prototype.readUint32LE =
          a.prototype.readUInt32LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || _(e, 4, this.length),
                (this[e] |
                  (this[e + 1] << 8) |
                  (this[e + 2] << 16)) +
                  16777216 * this[e + 3]
              );
            }),
        (a.prototype.readUint32BE =
          a.prototype.readUInt32BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || _(e, 4, this.length),
                16777216 * this[e] +
                  ((this[e + 1] << 16) |
                    (this[e + 2] << 8) |
                    this[e + 3])
              );
            }),
        (a.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || _(e, t, this.length);
          for (
            var n = this[e], i = 1, o = 0;
            ++o < t && (i *= 256);

          )
            n += this[e + o] * i;
          return (
            n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
          );
        }),
        (a.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || _(e, t, this.length);
          for (
            var n = t, i = 1, o = this[e + --n];
            n > 0 && (i *= 256);

          )
            o += this[e + --n] * i;
          return (
            o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
          );
        }),
        (a.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0),
          t || _(e, 1, this.length),
          128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (a.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || _(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || _(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (a.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 4, this.length),
            i.read(this, e, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 4, this.length),
            i.read(this, e, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 8, this.length),
            i.read(this, e, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 8, this.length),
            i.read(this, e, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1;
              w(this, e, t, r, i, 0);
            }
            var o = 1,
              s = 0;
            for (this[t] = 255 & e; ++s < r && (o *= 256); )
              this[t + s] = (e / o) & 255;
            return t + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1;
              w(this, e, t, r, i, 0);
            }
            var o = r - 1,
              s = 1;
            for (
              this[t + o] = 255 & e;
              --o >= 0 && (s *= 256);

            )
              this[t + o] = (e / s) & 255;
            return t + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || w(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (a.prototype.writeUint16LE =
          a.prototype.writeUInt16LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || w(this, e, t, 2, 65535, 0),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
        (a.prototype.writeUint16BE =
          a.prototype.writeUInt16BE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || w(this, e, t, 2, 65535, 0),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
        (a.prototype.writeUint32LE =
          a.prototype.writeUInt32LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || w(this, e, t, 4, 4294967295, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              );
            }),
        (a.prototype.writeUint32BE =
          a.prototype.writeUInt32BE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || w(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
        (a.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            w(this, e, t, r, i - 1, -i);
          }
          var o = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++o < r && (s *= 256); )
            e < 0 &&
              0 === a &&
              0 !== this[t + o - 1] &&
              (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (a.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            w(this, e, t, r, i - 1, -i);
          }
          var o = r - 1,
            s = 1,
            a = 0;
          for (
            this[t + o] = 255 & e;
            --o >= 0 && (s *= 256);

          )
            e < 0 &&
              0 === a &&
              0 !== this[t + o + 1] &&
              (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (a.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || w(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (a.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || w(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (a.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || w(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (a.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || w(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (a.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || w(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (a.prototype.writeFloatLE = function (e, t, r) {
          return E(this, e, t, !0, r);
        }),
        (a.prototype.writeFloatBE = function (e, t, r) {
          return E(this, e, t, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (e, t, r) {
          return k(this, e, t, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (e, t, r) {
          return k(this, e, t, !1, r);
        }),
        (a.prototype.copy = function (e, t, r, n) {
          if (!a.isBuffer(e))
            throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0)
            throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw RangeError("Index out of range");
          if (n < 0)
            throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var i = n - r;
          return (
            this === e &&
            "function" ==
              typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(
                  e,
                  this.subarray(r, n),
                  t
                ),
            i
          );
        }),
        (a.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r &&
                  ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !a.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
              var i,
                o = e.charCodeAt(0);
              (("utf8" === n && o < 128) ||
                "latin1" === n) &&
                (e = o);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            var s = a.isBuffer(e) ? e : a.from(e, n),
              u = s.length;
            if (0 === u)
              throw TypeError(
                'The value "' +
                  e +
                  '" is invalid for argument "value"'
              );
            for (i = 0; i < r - t; ++i)
              this[i + t] = s[i % u];
          }
          return this;
        });
      var A = /[^+/0-9A-Za-z-_]/g;
      function I(e, t) {
        t = t || 1 / 0;
        for (
          var r, n = e.length, i = null, o = [], s = 0;
          s < n;
          ++s
        ) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189),
                (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else
            i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push(
              (r >> 12) | 224,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function C(e) {
        return n.toByteArray(
          (function (e) {
            if (
              (e = (e = e.split("=")[0])
                .trim()
                .replace(A, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function T(e, t, r, n) {
        for (
          var i = 0;
          i < n && !(i + r >= t.length) && !(i >= e.length);
          ++i
        )
          t[i + r] = e[i];
        return i;
      }
      function P(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      var x = (function () {
        for (
          var e = "0123456789abcdef", t = Array(256), r = 0;
          r < 16;
          ++r
        )
          for (var n = 16 * r, i = 0; i < 16; ++i)
            t[n + i] = e[r] + e[i];
        return t;
      })();
    },
    7820: function (e, t, r) {
      let n;
      var i = r(4010);
      (t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            t[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        let r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        let n = 0,
          i = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e) => {
          "%%" !== e && (n++, "%c" === e && (i = n));
        }),
          t.splice(i, 0, r);
      }),
        (t.save = function (e) {
          try {
            e
              ? t.storage.setItem("debug", e)
              : t.storage.removeItem("debug");
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem("debug");
          } catch (e) {}
          return (
            !e &&
              void 0 !== i &&
              "env" in i &&
              (e = i.env.DEBUG),
            e
          );
        }),
        (t.useColors = function () {
          return (
            ("undefined" != typeof window &&
              !!window.process &&
              ("renderer" === window.process.type ||
                !!window.process.__nwjs)) ||
            (!(
              "undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)
            ) &&
              (("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style
                  .WebkitAppearance) ||
                ("undefined" != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception &&
                      window.console.table))) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.destroy =
          ((n = !1),
          () => {
            n ||
              ((n = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              ));
          })),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (t.log =
          console.debug || console.log || (() => {})),
        (e.exports = r(8455)(t));
      let { formatters: o } = e.exports;
      o.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    },
    8455: function (e, t, r) {
      e.exports = function (e) {
        function t(e) {
          let r, i, o;
          let s = null;
          function a(...e) {
            if (!a.enabled) return;
            let n = a,
              i = Number(new Date()),
              o = i - (r || i);
            (n.diff = o),
              (n.prev = r),
              (n.curr = i),
              (r = i),
              (e[0] = t.coerce(e[0])),
              "string" != typeof e[0] && e.unshift("%O");
            let s = 0;
            (e[0] = e[0].replace(
              /%([a-zA-Z%])/g,
              (r, i) => {
                if ("%%" === r) return "%";
                s++;
                let o = t.formatters[i];
                if ("function" == typeof o) {
                  let t = e[s];
                  (r = o.call(n, t)), e.splice(s, 1), s--;
                }
                return r;
              }
            )),
              t.formatArgs.call(n, e);
            let u = n.log || t.log;
            u.apply(n, e);
          }
          return (
            (a.namespace = e),
            (a.useColors = t.useColors()),
            (a.color = t.selectColor(e)),
            (a.extend = n),
            (a.destroy = t.destroy),
            Object.defineProperty(a, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== s
                  ? s
                  : (i !== t.namespaces &&
                      ((i = t.namespaces),
                      (o = t.enabled(e))),
                    o),
              set: (e) => {
                s = e;
              },
            }),
            "function" == typeof t.init && t.init(a),
            a
          );
        }
        function n(e, r) {
          let n = t(
            this.namespace + (void 0 === r ? ":" : r) + e
          );
          return (n.log = this.log), n;
        }
        function i(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function (e) {
            return e instanceof Error
              ? e.stack || e.message
              : e;
          }),
          (t.disable = function () {
            let e = [
              ...t.names.map(i),
              ...t.skips.map(i).map((e) => "-" + e),
            ].join(",");
            return t.enable(""), e;
          }),
          (t.enable = function (e) {
            let r;
            t.save(e),
              (t.namespaces = e),
              (t.names = []),
              (t.skips = []);
            let n = ("string" == typeof e ? e : "").split(
                /[\s,]+/
              ),
              i = n.length;
            for (r = 0; r < i; r++)
              n[r] &&
                ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
                  ? t.skips.push(
                      RegExp("^" + e.slice(1) + "$")
                    )
                  : t.names.push(RegExp("^" + e + "$")));
          }),
          (t.enabled = function (e) {
            let r, n;
            if ("*" === e[e.length - 1]) return !0;
            for (r = 0, n = t.skips.length; r < n; r++)
              if (t.skips[r].test(e)) return !1;
            for (r = 0, n = t.names.length; r < n; r++)
              if (t.names[r].test(e)) return !0;
            return !1;
          }),
          (t.humanize = r(4610)),
          (t.destroy = function () {
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
            );
          }),
          Object.keys(e).forEach((r) => {
            t[r] = e[r];
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function (e) {
            let r = 0;
            for (let t = 0; t < e.length; t++)
              r = ((r << 5) - r + e.charCodeAt(t)) | 0;
            return t.colors[Math.abs(r) % t.colors.length];
          }),
          t.enable(t.load()),
          t
        );
      };
    },
    8742: function (e, t, r) {
      var n = r(1620).Buffer,
        i = r(4010),
        o = r(3745),
        s = r(7517),
        a = r(2937),
        u = r(7062),
        l =
          n.from && n.from !== Uint8Array.from
            ? n.from([0])
            : new n([0]),
        c = function (e, t) {
          e._corked ? e.once("uncork", t) : t();
        },
        h = function (e, t) {
          e._autoDestroy && e.destroy(t);
        },
        f = function (e, t) {
          return function (r) {
            r
              ? h(
                  e,
                  "premature close" === r.message ? null : r
                )
              : t && !e._ended && e.end();
          };
        },
        p = function () {},
        d = function (e, t, r) {
          if (!(this instanceof d)) return new d(e, t, r);
          o.Duplex.call(this, r),
            (this._writable = null),
            (this._readable = null),
            (this._readable2 = null),
            (this._autoDestroy =
              !r || !1 !== r.autoDestroy),
            (this._forwardDestroy = !r || !1 !== r.destroy),
            (this._forwardEnd = !r || !1 !== r.end),
            (this._corked = 1),
            (this._ondrain = null),
            (this._drained = !1),
            (this._forwarding = !1),
            (this._unwrite = null),
            (this._unread = null),
            (this._ended = !1),
            (this.destroyed = !1),
            e && this.setWritable(e),
            t && this.setReadable(t);
        };
      a(d, o.Duplex),
        (d.obj = function (e, t, r) {
          return (
            r || (r = {}),
            (r.objectMode = !0),
            (r.highWaterMark = 16),
            new d(e, t, r)
          );
        }),
        (d.prototype.cork = function () {
          1 == ++this._corked && this.emit("cork");
        }),
        (d.prototype.uncork = function () {
          this._corked &&
            0 == --this._corked &&
            this.emit("uncork");
        }),
        (d.prototype.setWritable = function (e) {
          if (
            (this._unwrite && this._unwrite(),
            this.destroyed)
          ) {
            e && e.destroy && e.destroy();
            return;
          }
          if (null === e || !1 === e) {
            this.end();
            return;
          }
          var t = this,
            r = s(
              e,
              { writable: !0, readable: !1 },
              f(this, this._forwardEnd)
            ),
            n = function () {
              var e = t._ondrain;
              (t._ondrain = null), e && e();
            };
          this._unwrite && i.nextTick(n),
            (this._writable = e),
            this._writable.on("drain", n),
            (this._unwrite = function () {
              t._writable.removeListener("drain", n), r();
            }),
            this.uncork();
        }),
        (d.prototype.setReadable = function (e) {
          if (
            (this._unread && this._unread(), this.destroyed)
          ) {
            e && e.destroy && e.destroy();
            return;
          }
          if (null === e || !1 === e) {
            this.push(null), this.resume();
            return;
          }
          var t = this,
            r = s(
              e,
              { writable: !1, readable: !0 },
              f(this)
            ),
            n = function () {
              t._forward();
            },
            i = function () {
              t.push(null);
            };
          (this._drained = !0),
            (this._readable = e),
            (this._readable2 = e._readableState
              ? e
              : new o.Readable({
                  objectMode: !0,
                  highWaterMark: 16,
                }).wrap(e)),
            this._readable2.on("readable", n),
            this._readable2.on("end", i),
            (this._unread = function () {
              t._readable2.removeListener("readable", n),
                t._readable2.removeListener("end", i),
                r();
            }),
            this._forward();
        }),
        (d.prototype._read = function () {
          (this._drained = !0), this._forward();
        }),
        (d.prototype._forward = function () {
          var e;
          if (
            !this._forwarding &&
            this._readable2 &&
            this._drained
          ) {
            for (
              this._forwarding = !0;
              this._drained &&
              null !== (e = u(this._readable2));

            )
              this.destroyed ||
                (this._drained = this.push(e));
            this._forwarding = !1;
          }
        }),
        (d.prototype.destroy = function (e, t) {
          if ((t || (t = p), this.destroyed))
            return t(null);
          this.destroyed = !0;
          var r = this;
          i.nextTick(function () {
            r._destroy(e), t(null);
          });
        }),
        (d.prototype._destroy = function (e) {
          if (e) {
            var t = this._ondrain;
            (this._ondrain = null),
              t ? t(e) : this.emit("error", e);
          }
          this._forwardDestroy &&
            (this._readable &&
              this._readable.destroy &&
              this._readable.destroy(),
            this._writable &&
              this._writable.destroy &&
              this._writable.destroy()),
            this.emit("close");
        }),
        (d.prototype._write = function (e, t, r) {
          if (!this.destroyed) {
            if (this._corked)
              return c(
                this,
                this._write.bind(this, e, t, r)
              );
            if (e === l) return this._finish(r);
            if (!this._writable) return r();
            !1 === this._writable.write(e)
              ? (this._ondrain = r)
              : this.destroyed || r();
          }
        }),
        (d.prototype._finish = function (e) {
          var t = this;
          this.emit("preend"),
            c(this, function () {
              var r, n;
              (r = t._forwardEnd && t._writable),
                (n = function () {
                  !1 === t._writableState.prefinished &&
                    (t._writableState.prefinished = !0),
                    t.emit("prefinish"),
                    c(t, e);
                }),
                !r ||
                (r._writableState &&
                  r._writableState.finished)
                  ? n()
                  : r._writableState
                  ? r.end(n)
                  : (r.end(), n());
            });
        }),
        (d.prototype.end = function (e, t, r) {
          return "function" == typeof e
            ? this.end(null, null, e)
            : "function" == typeof t
            ? this.end(e, null, t)
            : ((this._ended = !0),
              e && this.write(e),
              this._writableState.ending ||
                this._writableState.destroyed ||
                this.write(l),
              o.Writable.prototype.end.call(this, r));
        }),
        (e.exports = d);
    },
    7517: function (e, t, r) {
      var n = r(4010),
        i = r(547),
        o = function () {},
        s = function (e, t, r) {
          if ("function" == typeof t) return s(e, null, t);
          t || (t = {}), (r = i(r || o));
          var a = e._writableState,
            u = e._readableState,
            l =
              t.readable ||
              (!1 !== t.readable && e.readable),
            c =
              t.writable ||
              (!1 !== t.writable && e.writable),
            h = !1,
            f = function () {
              e.writable || p();
            },
            p = function () {
              (c = !1), l || r.call(e);
            },
            d = function () {
              (l = !1), c || r.call(e);
            },
            g = function (t) {
              r.call(
                e,
                t
                  ? Error("exited with error code: " + t)
                  : null
              );
            },
            y = function (t) {
              r.call(e, t);
            },
            b = function () {
              n.nextTick(m);
            },
            m = function () {
              if (
                !h &&
                ((l && !(u && u.ended && !u.destroyed)) ||
                  (c && !(a && a.ended && !a.destroyed)))
              )
                return r.call(e, Error("premature close"));
            },
            v = function () {
              e.req.on("finish", p);
            };
          return (
            e.setHeader && "function" == typeof e.abort
              ? (e.on("complete", p),
                e.on("abort", b),
                e.req ? v() : e.on("request", v))
              : c &&
                !a &&
                (e.on("end", f), e.on("close", f)),
            e.stdio &&
              Array.isArray(e.stdio) &&
              3 === e.stdio.length &&
              e.on("exit", g),
            e.on("end", d),
            e.on("finish", p),
            !1 !== t.error && e.on("error", y),
            e.on("close", b),
            function () {
              (h = !0),
                e.removeListener("complete", p),
                e.removeListener("abort", b),
                e.removeListener("request", v),
                e.req && e.req.removeListener("finish", p),
                e.removeListener("end", f),
                e.removeListener("close", f),
                e.removeListener("finish", p),
                e.removeListener("exit", g),
                e.removeListener("end", d),
                e.removeListener("error", y),
                e.removeListener("close", b);
            }
          );
        };
      e.exports = s;
    },
    2100: function (e) {
      "use strict";
      var t,
        r = "object" == typeof Reflect ? Reflect : null,
        n =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(
                  e,
                  t,
                  r
                );
              };
      t =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var i =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, n) {
            function i(r) {
              e.removeListener(t, o), n(r);
            }
            function o() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", i),
                r([].slice.call(arguments));
            }
            g(e, t, o, { once: !0 }),
              "error" !== t &&
                "function" == typeof e.on &&
                g(e, "error", i, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var s = 10;
      function a(e) {
        if ("function" != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function u(e) {
        return void 0 === e._maxListeners
          ? o.defaultMaxListeners
          : e._maxListeners;
      }
      function l(e, t, r, n) {
        if (
          (a(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)),
              (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit(
                  "newListener",
                  t,
                  r.listener ? r.listener : r
                ),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = o[t] = n ? [r, s] : [s, r])
            : n
            ? s.unshift(r)
            : s.push(r),
          (i = u(e)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var i,
            o,
            s,
            l = Error(
              "Possible EventEmitter memory leak detected. " +
                s.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = s.length),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function c() {
        if (!this.fired)
          return (this.target.removeListener(
            this.type,
            this.wrapFn
          ),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function h(e, t, r) {
        var n = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: r,
          },
          i = c.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function f(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (e) {
              for (
                var t = Array(e.length), r = 0;
                r < t.length;
                ++r
              )
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : d(i, i.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function d(e, t) {
        for (var r = Array(t), n = 0; n < t; ++n)
          r[n] = e[n];
        return r;
      }
      function g(e, t, r, n) {
        if ("function" == typeof e.on)
          n.once ? e.once(t, r) : e.on(t, r);
        else if ("function" == typeof e.addEventListener)
          e.addEventListener(t, function i(o) {
            n.once && e.removeEventListener(t, i), r(o);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || i(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          s = e;
        },
      }),
        (o.init = function () {
          (void 0 === this._events ||
            this._events ===
              Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)),
            (this._eventsCount = 0)),
            (this._maxListeners =
              this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || i(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var i = "error" === e,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            if (
              (t.length > 0 && (s = t[0]),
              s instanceof Error)
            )
              throw s;
            var s,
              a = Error(
                "Unhandled error." +
                  (s ? " (" + s.message + ")" : "")
              );
            throw ((a.context = s), a);
          }
          var u = o[e];
          if (void 0 === u) return !1;
          if ("function" == typeof u) n(u, this, t);
          else
            for (
              var l = u.length, c = d(u, l), r = 0;
              r < l;
              ++r
            )
              n(c[r], this, t);
          return !0;
        }),
        (o.prototype.addListener = function (e, t) {
          return l(this, e, t, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return l(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return a(t), this.on(e, h(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return (
            a(t),
            this.prependListener(e, h(this, e, t)),
            this
          );
        }),
        (o.prototype.removeListener = function (e, t) {
          var r, n, i, o, s;
          if (
            (a(t),
            void 0 === (n = this._events) ||
              void 0 === (r = n[e]))
          )
            return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit(
                    "removeListener",
                    e,
                    r.listener || t
                  ));
          else if ("function" != typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (s = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++)
                    e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              "removeListener" !== (i = o[n]) &&
                this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e]))
            this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--)
              this.removeListener(e, t[n]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return f(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return f(this, e, !1);
        }),
        (o.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (o.prototype.listenerCount = p),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0
            ? t(this._events)
            : [];
        });
    },
    551: function (e, t) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read =
        function (e, t, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            l = u >> 1,
            c = -7,
            h = r ? i - 1 : 0,
            f = r ? -1 : 1,
            p = e[t + h];
          for (
            h += f,
              o = p & ((1 << -c) - 1),
              p >>= -c,
              c += a;
            c > 0;
            o = 256 * o + e[t + h], h += f, c -= 8
          );
          for (
            s = o & ((1 << -c) - 1), o >>= -c, c += n;
            c > 0;
            s = 256 * s + e[t + h], h += f, c -= 8
          );
          if (0 === o) o = 1 - l;
          else {
            if (o === u)
              return s ? NaN : (p ? -1 : 1) * (1 / 0);
            (s += Math.pow(2, n)), (o -= l);
          }
          return (p ? -1 : 1) * s * Math.pow(2, o - n);
        }),
        (t.write = function (e, t, r, n, i, o) {
          var s,
            a,
            u,
            l = 8 * o - i - 1,
            c = (1 << l) - 1,
            h = c >> 1,
            f = 23 === i ? 5960464477539062e-23 : 0,
            p = n ? 0 : o - 1,
            d = n ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (s = c))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -s)) < 1 &&
                  (s--, (u *= 2)),
                s + h >= 1
                  ? (t += f / u)
                  : (t += f * Math.pow(2, 1 - h)),
                t * u >= 2 && (s++, (u /= 2)),
                s + h >= c
                  ? ((a = 0), (s = c))
                  : s + h >= 1
                  ? ((a = (t * u - 1) * Math.pow(2, i)),
                    (s += h))
                  : ((a =
                      t *
                      Math.pow(2, h - 1) *
                      Math.pow(2, i)),
                    (s = 0)));
            i >= 8;
            e[r + p] = 255 & a, p += d, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, l += i;
            l > 0;
            e[r + p] = 255 & s, p += d, s /= 256, l -= 8
          );
          e[r + p - d] |= 128 * g;
        });
    },
    2937: function (e) {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    3189: function (e, t, r) {
      "use strict";
      r.d(t, {
        hU: function () {
          return A;
        },
      });
      var n,
        i,
        o,
        s,
        a,
        u =
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(
                    t,
                    r
                  ) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        l = (function () {
          function e(e, t) {
            (this.ee = 1),
              (this.u = void 0),
              (this.p = void 0),
              (this.K = void 0),
              (this.N = void 0),
              (this.rr = void 0),
              (this.u = e),
              (this.p = t);
          }
          return (
            (e.prototype.L = function () {
              var e = this;
              if (1 === e.ee && e.rr.rr === e) e = e.N;
              else if (e.K) for (e = e.K; e.N; ) e = e.N;
              else {
                for (var t = e.rr; t.K === e; )
                  t = (e = t).rr;
                e = t;
              }
              return e;
            }),
            (e.prototype.m = function () {
              var e = this;
              if (e.N) {
                for (e = e.N; e.K; ) e = e.K;
                return e;
              }
              for (var t = e.rr; t.N === e; )
                t = (e = t).rr;
              return e.N !== t ? t : e;
            }),
            (e.prototype.ne = function () {
              var e = this.rr,
                t = this.N,
                r = t.K;
              return (
                e.rr === this
                  ? (e.rr = t)
                  : e.K === this
                  ? (e.K = t)
                  : (e.N = t),
                (t.rr = e),
                (t.K = this),
                (this.rr = t),
                (this.N = r),
                r && (r.rr = this),
                t
              );
            }),
            (e.prototype.te = function () {
              var e = this.rr,
                t = this.K,
                r = t.N;
              return (
                e.rr === this
                  ? (e.rr = t)
                  : e.K === this
                  ? (e.K = t)
                  : (e.N = t),
                (t.rr = e),
                (t.N = this),
                (this.rr = t),
                (this.K = r),
                r && (r.rr = this),
                t
              );
            }),
            e
          );
        })(),
        c = (function (e) {
          function t() {
            var t =
              (null !== e && e.apply(this, arguments)) ||
              this;
            return (t.tr = 1), t;
          }
          return (
            u(t, e),
            (t.prototype.ne = function () {
              var t = e.prototype.ne.call(this);
              return this.ie(), t.ie(), t;
            }),
            (t.prototype.te = function () {
              var t = e.prototype.te.call(this);
              return this.ie(), t.ie(), t;
            }),
            (t.prototype.ie = function () {
              (this.tr = 1),
                this.K && (this.tr += this.K.tr),
                this.N && (this.tr += this.N.tr);
            }),
            t
          );
        })(l),
        h =
          ((i = function (e, t) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(
                    t,
                    r
                  ) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        f = (function () {
          function e(e) {
            void 0 === e && (e = 0),
              (this.iteratorType = e);
          }
          return (
            (e.prototype.equals = function (e) {
              return this.o === e.o;
            }),
            e
          );
        })(),
        p = (function (e) {
          function t() {
            return (
              (null !== e && e.apply(this, arguments)) ||
              this
            );
          }
          return h(t, e), t;
        })(
          (function () {
            function e() {
              this.M = 0;
            }
            return (
              Object.defineProperty(e.prototype, "length", {
                get: function () {
                  return this.M;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.size = function () {
                return this.M;
              }),
              (e.prototype.empty = function () {
                return 0 === this.M;
              }),
              e
            );
          })()
        );
      function d() {
        throw RangeError("Iterator access denied!");
      }
      var g =
          ((o = function (e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(
                    t,
                    r
                  ) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        y = function (e, t) {
          var r =
            "function" == typeof Symbol &&
            e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (
              ;
              (void 0 === t || t-- > 0) &&
              !(n = o.next()).done;

            )
              s.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        b = function (e) {
          var t =
              "function" == typeof Symbol &&
              Symbol.iterator,
            r = t && e[t],
            n = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw TypeError(
            t
              ? "Object is not iterable."
              : "Symbol.iterator is not defined."
          );
        },
        m = (function (e) {
          function t(t, r) {
            void 0 === t &&
              (t = function (e, t) {
                return e < t ? -1 : e > t ? 1 : 0;
              }),
              void 0 === r && (r = !1);
            var n = e.call(this) || this;
            return (
              (n.W = void 0),
              (n.$ = t),
              r
                ? ((n.re = c),
                  (n.v = function (e, t, r) {
                    var n = this.se(e, t, r);
                    if (n) {
                      for (var i = n.rr; i !== this.h; )
                        (i.tr += 1), (i = i.rr);
                      var o = this.fe(n);
                      if (o) {
                        var s = o.parentNode,
                          a = o.grandParent,
                          u = o.curNode;
                        s.ie(), a.ie(), u.ie();
                      }
                    }
                    return this.M;
                  }),
                  (n.G = function (e) {
                    for (var t = this.he(e); t !== this.h; )
                      (t.tr -= 1), (t = t.rr);
                  }))
                : ((n.re = l),
                  (n.v = function (e, t, r) {
                    var n = this.se(e, t, r);
                    return n && this.fe(n), this.M;
                  }),
                  (n.G = n.he)),
              (n.h = new n.re()),
              n
            );
          }
          return (
            g(t, e),
            (t.prototype.U = function (e, t) {
              for (var r = this.h; e; ) {
                var n = this.$(e.u, t);
                if (n < 0) e = e.N;
                else {
                  if (!(n > 0)) return e;
                  (r = e), (e = e.K);
                }
              }
              return r;
            }),
            (t.prototype.X = function (e, t) {
              for (var r = this.h; e; )
                0 >= this.$(e.u, t)
                  ? (e = e.N)
                  : ((r = e), (e = e.K));
              return r;
            }),
            (t.prototype.Y = function (e, t) {
              for (var r = this.h; e; ) {
                var n = this.$(e.u, t);
                if (n < 0) (r = e), (e = e.N);
                else {
                  if (!(n > 0)) return e;
                  e = e.K;
                }
              }
              return r;
            }),
            (t.prototype.Z = function (e, t) {
              for (var r = this.h; e; )
                0 > this.$(e.u, t)
                  ? ((r = e), (e = e.N))
                  : (e = e.K);
              return r;
            }),
            (t.prototype.ue = function (e) {
              for (;;) {
                var t = e.rr;
                if (t === this.h) return;
                if (1 === e.ee) {
                  e.ee = 0;
                  return;
                }
                if (e === t.K) {
                  var r = t.N;
                  if (1 === r.ee)
                    (r.ee = 0),
                      (t.ee = 1),
                      t === this.W
                        ? (this.W = t.ne())
                        : t.ne();
                  else {
                    if (r.N && 1 === r.N.ee) {
                      (r.ee = t.ee),
                        (t.ee = 0),
                        (r.N.ee = 0),
                        t === this.W
                          ? (this.W = t.ne())
                          : t.ne();
                      return;
                    }
                    r.K && 1 === r.K.ee
                      ? ((r.ee = 1), (r.K.ee = 0), r.te())
                      : ((r.ee = 1), (e = t));
                  }
                } else {
                  var r = t.K;
                  if (1 === r.ee)
                    (r.ee = 0),
                      (t.ee = 1),
                      t === this.W
                        ? (this.W = t.te())
                        : t.te();
                  else {
                    if (r.K && 1 === r.K.ee) {
                      (r.ee = t.ee),
                        (t.ee = 0),
                        (r.K.ee = 0),
                        t === this.W
                          ? (this.W = t.te())
                          : t.te();
                      return;
                    }
                    r.N && 1 === r.N.ee
                      ? ((r.ee = 1), (r.N.ee = 0), r.ne())
                      : ((r.ee = 1), (e = t));
                  }
                }
              }
            }),
            (t.prototype.he = function (e) {
              if (1 === this.M) return this.clear(), this.h;
              for (var t, r, n = e; n.K || n.N; ) {
                if (n.N) for (n = n.N; n.K; ) n = n.K;
                else n = n.K;
                (t = y([n.u, e.u], 2)),
                  (e.u = t[0]),
                  (n.u = t[1]),
                  (r = y([n.p, e.p], 2)),
                  (e.p = r[0]),
                  (n.p = r[1]),
                  (e = n);
              }
              this.h.K === n
                ? (this.h.K = n.rr)
                : this.h.N === n && (this.h.N = n.rr),
                this.ue(n);
              var i = n.rr;
              return (
                n === i.K ? (i.K = void 0) : (i.N = void 0),
                (this.M -= 1),
                (this.W.ee = 0),
                i
              );
            }),
            (t.prototype.ae = function (e, t) {
              return (
                void 0 !== e &&
                (!!(this.ae(e.K, t) || t(e)) ||
                  this.ae(e.N, t))
              );
            }),
            (t.prototype.fe = function (e) {
              for (;;) {
                var t = e.rr;
                if (0 === t.ee) return;
                var r = t.rr;
                if (t === r.K) {
                  var n = r.N;
                  if (n && 1 === n.ee) {
                    if (((n.ee = t.ee = 0), r === this.W))
                      return;
                    (r.ee = 1), (e = r);
                    continue;
                  }
                  if (e === t.N) {
                    if (
                      ((e.ee = 0),
                      e.K && (e.K.rr = t),
                      e.N && (e.N.rr = r),
                      (t.N = e.K),
                      (r.K = e.N),
                      (e.K = t),
                      (e.N = r),
                      r === this.W)
                    )
                      (this.W = e), (this.h.rr = e);
                    else {
                      var i = r.rr;
                      i.K === r ? (i.K = e) : (i.N = e);
                    }
                    return (
                      (e.rr = r.rr),
                      (t.rr = e),
                      (r.rr = e),
                      (r.ee = 1),
                      {
                        parentNode: t,
                        grandParent: r,
                        curNode: e,
                      }
                    );
                  }
                  (t.ee = 0),
                    r === this.W
                      ? (this.W = r.te())
                      : r.te(),
                    (r.ee = 1);
                } else {
                  var n = r.K;
                  if (n && 1 === n.ee) {
                    if (((n.ee = t.ee = 0), r === this.W))
                      return;
                    (r.ee = 1), (e = r);
                    continue;
                  }
                  if (e === t.K) {
                    if (
                      ((e.ee = 0),
                      e.K && (e.K.rr = r),
                      e.N && (e.N.rr = t),
                      (r.N = e.K),
                      (t.K = e.N),
                      (e.K = r),
                      (e.N = t),
                      r === this.W)
                    )
                      (this.W = e), (this.h.rr = e);
                    else {
                      var i = r.rr;
                      i.K === r ? (i.K = e) : (i.N = e);
                    }
                    return (
                      (e.rr = r.rr),
                      (t.rr = e),
                      (r.rr = e),
                      (r.ee = 1),
                      {
                        parentNode: t,
                        grandParent: r,
                        curNode: e,
                      }
                    );
                  }
                  (t.ee = 0),
                    r === this.W
                      ? (this.W = r.ne())
                      : r.ne(),
                    (r.ee = 1);
                }
                return;
              }
            }),
            (t.prototype.se = function (e, t, r) {
              if (void 0 === this.W) {
                (this.M += 1),
                  (this.W = new this.re(e, t)),
                  (this.W.ee = 0),
                  (this.W.rr = this.h),
                  (this.h.rr = this.W),
                  (this.h.K = this.W),
                  (this.h.N = this.W);
                return;
              }
              var n,
                i = this.h.K,
                o = this.$(i.u, e);
              if (0 === o) {
                i.p = t;
                return;
              }
              if (o > 0)
                (i.K = new this.re(e, t)),
                  (i.K.rr = i),
                  (n = i.K),
                  (this.h.K = n);
              else {
                var s = this.h.N,
                  a = this.$(s.u, e);
                if (0 === a) {
                  s.p = t;
                  return;
                }
                if (a < 0)
                  (s.N = new this.re(e, t)),
                    (s.N.rr = s),
                    (n = s.N),
                    (this.h.N = n);
                else {
                  if (void 0 !== r) {
                    var u = r.o;
                    if (u !== this.h) {
                      var l = this.$(u.u, e);
                      if (0 === l) {
                        u.p = t;
                        return;
                      }
                      if (l > 0) {
                        var c = u.L(),
                          h = this.$(c.u, e);
                        if (0 === h) {
                          c.p = t;
                          return;
                        }
                        h < 0 &&
                          ((n = new this.re(e, t)),
                          void 0 === c.N
                            ? ((c.N = n), (n.rr = c))
                            : ((u.K = n), (n.rr = u)));
                      }
                    }
                  }
                  if (void 0 === n)
                    for (n = this.W; ; ) {
                      var f = this.$(n.u, e);
                      if (f > 0) {
                        if (void 0 === n.K) {
                          (n.K = new this.re(e, t)),
                            (n.K.rr = n),
                            (n = n.K);
                          break;
                        }
                        n = n.K;
                      } else if (f < 0) {
                        if (void 0 === n.N) {
                          (n.N = new this.re(e, t)),
                            (n.N.rr = n),
                            (n = n.N);
                          break;
                        }
                        n = n.N;
                      } else {
                        n.p = t;
                        return;
                      }
                    }
                }
              }
              return (this.M += 1), n;
            }),
            (t.prototype.g = function (e, t) {
              for (; e; ) {
                var r = this.$(e.u, t);
                if (r < 0) e = e.N;
                else {
                  if (!(r > 0)) return e;
                  e = e.K;
                }
              }
              return e || this.h;
            }),
            (t.prototype.clear = function () {
              (this.M = 0),
                (this.W = void 0),
                (this.h.rr = void 0),
                (this.h.K = this.h.N = void 0);
            }),
            (t.prototype.updateKeyByIterator = function (
              e,
              t
            ) {
              var r = e.o;
              if ((r === this.h && d(), 1 === this.M))
                return (r.u = t), !0;
              if (r === this.h.K)
                return (
                  this.$(r.m().u, t) > 0 && ((r.u = t), !0)
                );
              if (r === this.h.N)
                return (
                  0 > this.$(r.L().u, t) && ((r.u = t), !0)
                );
              var n = r.L().u;
              if (this.$(n, t) >= 0) return !1;
              var i = r.m().u;
              return (
                !(0 >= this.$(i, t)) && ((r.u = t), !0)
              );
            }),
            (t.prototype.eraseElementByPos = function (e) {
              if (e < 0 || e > this.M - 1)
                throw RangeError();
              var t = 0,
                r = this;
              return (
                this.ae(this.W, function (n) {
                  return e === t
                    ? (r.G(n), !0)
                    : ((t += 1), !1);
                }),
                this.M
              );
            }),
            (t.prototype.eraseElementByKey = function (e) {
              if (0 === this.M) return !1;
              var t = this.g(this.W, e);
              return t !== this.h && (this.G(t), !0);
            }),
            (t.prototype.eraseElementByIterator = function (
              e
            ) {
              var t = e.o;
              t === this.h && d();
              var r = void 0 === t.N;
              return (
                0 === e.iteratorType
                  ? r && e.next()
                  : (r && void 0 !== t.K) || e.next(),
                this.G(t),
                e
              );
            }),
            (t.prototype.forEach = function (e) {
              var t,
                r,
                n = 0;
              try {
                for (
                  var i = b(this), o = i.next();
                  !o.done;
                  o = i.next()
                ) {
                  var s = o.value;
                  e(s, n++, this);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o &&
                    !o.done &&
                    (r = i.return) &&
                    r.call(i);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.getElementByPos = function (e) {
              if (e < 0 || e > this.M - 1)
                throw RangeError();
              var t,
                r,
                n,
                i = 0;
              try {
                for (
                  var o = b(this), s = o.next();
                  !s.done;
                  s = o.next()
                ) {
                  var a = s.value;
                  if (i === e) {
                    n = a;
                    break;
                  }
                  i += 1;
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  s &&
                    !s.done &&
                    (r = o.return) &&
                    r.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              return n;
            }),
            (t.prototype.getHeight = function () {
              if (0 === this.M) return 0;
              var e = function (t) {
                return t ? Math.max(e(t.K), e(t.N)) + 1 : 0;
              };
              return e(this.W);
            }),
            t
          );
        })(p),
        v =
          ((s = function (e, t) {
            return (s =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(
                    t,
                    r
                  ) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            s(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        _ = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, n) || this;
            return (
              (i.o = t),
              (i.h = r),
              0 === i.iteratorType
                ? ((i.pre = function () {
                    return (
                      this.o === this.h.K && d(),
                      (this.o = this.o.L()),
                      this
                    );
                  }),
                  (i.next = function () {
                    return (
                      this.o === this.h && d(),
                      (this.o = this.o.m()),
                      this
                    );
                  }))
                : ((i.pre = function () {
                    return (
                      this.o === this.h.N && d(),
                      (this.o = this.o.m()),
                      this
                    );
                  }),
                  (i.next = function () {
                    return (
                      this.o === this.h && d(),
                      (this.o = this.o.L()),
                      this
                    );
                  })),
              i
            );
          }
          return (
            v(t, e),
            Object.defineProperty(t.prototype, "index", {
              get: function () {
                var e = this.o,
                  t = this.h.rr;
                if (e === this.h) return t ? t.tr - 1 : 0;
                var r = 0;
                for (e.K && (r += e.K.tr); e !== t; ) {
                  var n = e.rr;
                  e === n.N &&
                    ((r += 1), n.K && (r += n.K.tr)),
                    (e = n);
                }
                return r;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(f),
        w =
          ((a = function (e, t) {
            return (a =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(
                    t,
                    r
                  ) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            a(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        S = function (e, t) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r)
                  throw TypeError(
                    "Generator is already executing."
                  );
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw ||
                              ((i = n.return) && i.call(n),
                              0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (
                      ((n = 0),
                      i && (o = [2 & o[0], i.value]),
                      o[0])
                    ) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return (
                          s.label++,
                          { value: o[1], done: !1 }
                        );
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i =
                            (i = s.trys).length > 0 &&
                            i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i ||
                            (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return {
                  value: o[0] ? o[1] : void 0,
                  done: !0,
                };
              })([o, a]);
            };
          }
        },
        E = function (e) {
          var t =
              "function" == typeof Symbol &&
              Symbol.iterator,
            r = t && e[t],
            n = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw TypeError(
            t
              ? "Object is not iterable."
              : "Symbol.iterator is not defined."
          );
        },
        k = (function (e) {
          function t(t, r, n, i) {
            var o = e.call(this, t, r, i) || this;
            return (o.container = n), o;
          }
          return (
            w(t, e),
            Object.defineProperty(t.prototype, "pointer", {
              get: function () {
                return this.o === this.h && d(), this.o.u;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.copy = function () {
              return new t(
                this.o,
                this.h,
                this.container,
                this.iteratorType
              );
            }),
            t
          );
        })(_),
        A = (function (e) {
          function t(t, r, n) {
            void 0 === t && (t = []);
            var i = e.call(this, r, n) || this;
            return (
              t.forEach(function (e) {
                i.insert(e);
              }),
              i
            );
          }
          return (
            w(t, e),
            (t.prototype.P = function (e) {
              return S(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (void 0 === e) return [2];
                    return [5, E(this.P(e.K))];
                  case 1:
                    return t.sent(), [4, e.u];
                  case 2:
                    return t.sent(), [5, E(this.P(e.N))];
                  case 3:
                    return t.sent(), [2];
                }
              });
            }),
            (t.prototype.begin = function () {
              return new k(
                this.h.K || this.h,
                this.h,
                this
              );
            }),
            (t.prototype.end = function () {
              return new k(this.h, this.h, this);
            }),
            (t.prototype.rBegin = function () {
              return new k(
                this.h.N || this.h,
                this.h,
                this,
                1
              );
            }),
            (t.prototype.rEnd = function () {
              return new k(this.h, this.h, this, 1);
            }),
            (t.prototype.front = function () {
              return this.h.K ? this.h.K.u : void 0;
            }),
            (t.prototype.back = function () {
              return this.h.N ? this.h.N.u : void 0;
            }),
            (t.prototype.insert = function (e, t) {
              return this.v(e, void 0, t);
            }),
            (t.prototype.find = function (e) {
              var t = this.g(this.W, e);
              return new k(t, this.h, this);
            }),
            (t.prototype.lowerBound = function (e) {
              var t = this.U(this.W, e);
              return new k(t, this.h, this);
            }),
            (t.prototype.upperBound = function (e) {
              var t = this.X(this.W, e);
              return new k(t, this.h, this);
            }),
            (t.prototype.reverseLowerBound = function (e) {
              var t = this.Y(this.W, e);
              return new k(t, this.h, this);
            }),
            (t.prototype.reverseUpperBound = function (e) {
              var t = this.Z(this.W, e);
              return new k(t, this.h, this);
            }),
            (t.prototype.union = function (e) {
              var t = this;
              return (
                e.forEach(function (e) {
                  t.insert(e);
                }),
                this.M
              );
            }),
            (t.prototype[Symbol.iterator] = function () {
              return this.P(this.W);
            }),
            t
          );
        })(m);
    },
    8968: function (e, t, r) {
      "use strict";
      let n = r(9900),
        i = Symbol("max"),
        o = Symbol("length"),
        s = Symbol("lengthCalculator"),
        a = Symbol("allowStale"),
        u = Symbol("maxAge"),
        l = Symbol("dispose"),
        c = Symbol("noDisposeOnSet"),
        h = Symbol("lruList"),
        f = Symbol("cache"),
        p = Symbol("updateAgeOnGet"),
        d = () => 1,
        g = (e, t, r) => {
          let n = e[f].get(t);
          if (n) {
            let t = n.value;
            if (y(e, t)) {
              if ((m(e, n), !e[a])) return;
            } else
              r &&
                (e[p] && (n.value.now = Date.now()),
                e[h].unshiftNode(n));
            return t.value;
          }
        },
        y = (e, t) => {
          if (!t || (!t.maxAge && !e[u])) return !1;
          let r = Date.now() - t.now;
          return t.maxAge ? r > t.maxAge : e[u] && r > e[u];
        },
        b = (e) => {
          if (e[o] > e[i])
            for (
              let t = e[h].tail;
              e[o] > e[i] && null !== t;

            ) {
              let r = t.prev;
              m(e, t), (t = r);
            }
        },
        m = (e, t) => {
          if (t) {
            let r = t.value;
            e[l] && e[l](r.key, r.value),
              (e[o] -= r.length),
              e[f].delete(r.key),
              e[h].removeNode(t);
          }
        };
      class v {
        constructor(e, t, r, n, i) {
          (this.key = e),
            (this.value = t),
            (this.length = r),
            (this.now = n),
            (this.maxAge = i || 0);
        }
      }
      let _ = (e, t, r, n) => {
        let i = r.value;
        y(e, i) && (m(e, r), e[a] || (i = void 0)),
          i && t.call(n, i.value, i.key, e);
      };
      e.exports = class {
        constructor(e) {
          if (
            ("number" == typeof e && (e = { max: e }),
            e || (e = {}),
            e.max &&
              ("number" != typeof e.max || e.max < 0))
          )
            throw TypeError(
              "max must be a non-negative number"
            );
          this[i] = e.max || 1 / 0;
          let t = e.length || d;
          if (
            ((this[s] = "function" != typeof t ? d : t),
            (this[a] = e.stale || !1),
            e.maxAge && "number" != typeof e.maxAge)
          )
            throw TypeError("maxAge must be a number");
          (this[u] = e.maxAge || 0),
            (this[l] = e.dispose),
            (this[c] = e.noDisposeOnSet || !1),
            (this[p] = e.updateAgeOnGet || !1),
            this.reset();
        }
        set max(e) {
          if ("number" != typeof e || e < 0)
            throw TypeError(
              "max must be a non-negative number"
            );
          (this[i] = e || 1 / 0), b(this);
        }
        get max() {
          return this[i];
        }
        set allowStale(e) {
          this[a] = !!e;
        }
        get allowStale() {
          return this[a];
        }
        set maxAge(e) {
          if ("number" != typeof e)
            throw TypeError(
              "maxAge must be a non-negative number"
            );
          (this[u] = e), b(this);
        }
        get maxAge() {
          return this[u];
        }
        set lengthCalculator(e) {
          "function" != typeof e && (e = d),
            e !== this[s] &&
              ((this[s] = e),
              (this[o] = 0),
              this[h].forEach((e) => {
                (e.length = this[s](e.value, e.key)),
                  (this[o] += e.length);
              })),
            b(this);
        }
        get lengthCalculator() {
          return this[s];
        }
        get length() {
          return this[o];
        }
        get itemCount() {
          return this[h].length;
        }
        rforEach(e, t) {
          t = t || this;
          for (let r = this[h].tail; null !== r; ) {
            let n = r.prev;
            _(this, e, r, t), (r = n);
          }
        }
        forEach(e, t) {
          t = t || this;
          for (let r = this[h].head; null !== r; ) {
            let n = r.next;
            _(this, e, r, t), (r = n);
          }
        }
        keys() {
          return this[h].toArray().map((e) => e.key);
        }
        values() {
          return this[h].toArray().map((e) => e.value);
        }
        reset() {
          this[l] &&
            this[h] &&
            this[h].length &&
            this[h].forEach((e) => this[l](e.key, e.value)),
            (this[f] = new Map()),
            (this[h] = new n()),
            (this[o] = 0);
        }
        dump() {
          return this[h]
            .map(
              (e) =>
                !y(this, e) && {
                  k: e.key,
                  v: e.value,
                  e: e.now + (e.maxAge || 0),
                }
            )
            .toArray()
            .filter((e) => e);
        }
        dumpLru() {
          return this[h];
        }
        set(e, t, r) {
          if ((r = r || this[u]) && "number" != typeof r)
            throw TypeError("maxAge must be a number");
          let n = r ? Date.now() : 0,
            a = this[s](t, e);
          if (this[f].has(e)) {
            if (a > this[i])
              return m(this, this[f].get(e)), !1;
            let s = this[f].get(e),
              u = s.value;
            return (
              this[l] && !this[c] && this[l](e, u.value),
              (u.now = n),
              (u.maxAge = r),
              (u.value = t),
              (this[o] += a - u.length),
              (u.length = a),
              this.get(e),
              b(this),
              !0
            );
          }
          let p = new v(e, t, a, n, r);
          return p.length > this[i]
            ? (this[l] && this[l](e, t), !1)
            : ((this[o] += p.length),
              this[h].unshift(p),
              this[f].set(e, this[h].head),
              b(this),
              !0);
        }
        has(e) {
          if (!this[f].has(e)) return !1;
          let t = this[f].get(e).value;
          return !y(this, t);
        }
        get(e) {
          return g(this, e, !0);
        }
        peek(e) {
          return g(this, e, !1);
        }
        pop() {
          let e = this[h].tail;
          return e ? (m(this, e), e.value) : null;
        }
        del(e) {
          m(this, this[f].get(e));
        }
        load(e) {
          this.reset();
          let t = Date.now();
          for (let r = e.length - 1; r >= 0; r--) {
            let n = e[r],
              i = n.e || 0;
            if (0 === i) this.set(n.k, n.v);
            else {
              let e = i - t;
              e > 0 && this.set(n.k, n.v, e);
            }
          }
        }
        prune() {
          this[f].forEach((e, t) => g(this, t, !1));
        }
      };
    },
    9372: function (e, t, r) {
      var n = r(1620).Buffer;
      let i = e.exports;
      for (let e in ((i.types = {
        0: "reserved",
        1: "connect",
        2: "connack",
        3: "publish",
        4: "puback",
        5: "pubrec",
        6: "pubrel",
        7: "pubcomp",
        8: "subscribe",
        9: "suback",
        10: "unsubscribe",
        11: "unsuback",
        12: "pingreq",
        13: "pingresp",
        14: "disconnect",
        15: "auth",
      }),
      (i.codes = {}),
      i.types)) {
        let t = i.types[e];
        i.codes[t] = e;
      }
      for (let e in ((i.CMD_SHIFT = 4),
      (i.CMD_MASK = 240),
      (i.DUP_MASK = 8),
      (i.QOS_MASK = 3),
      (i.QOS_SHIFT = 1),
      (i.RETAIN_MASK = 1),
      (i.VARBYTEINT_MASK = 127),
      (i.VARBYTEINT_FIN_MASK = 128),
      (i.VARBYTEINT_MAX = 268435455),
      (i.SESSIONPRESENT_MASK = 1),
      (i.SESSIONPRESENT_HEADER = n.from([
        i.SESSIONPRESENT_MASK,
      ])),
      (i.CONNACK_HEADER = n.from([
        i.codes.connack << i.CMD_SHIFT,
      ])),
      (i.USERNAME_MASK = 128),
      (i.PASSWORD_MASK = 64),
      (i.WILL_RETAIN_MASK = 32),
      (i.WILL_QOS_MASK = 24),
      (i.WILL_QOS_SHIFT = 3),
      (i.WILL_FLAG_MASK = 4),
      (i.CLEAN_SESSION_MASK = 2),
      (i.CONNECT_HEADER = n.from([
        i.codes.connect << i.CMD_SHIFT,
      ])),
      (i.properties = {
        sessionExpiryInterval: 17,
        willDelayInterval: 24,
        receiveMaximum: 33,
        maximumPacketSize: 39,
        topicAliasMaximum: 34,
        requestResponseInformation: 25,
        requestProblemInformation: 23,
        userProperties: 38,
        authenticationMethod: 21,
        authenticationData: 22,
        payloadFormatIndicator: 1,
        messageExpiryInterval: 2,
        contentType: 3,
        responseTopic: 8,
        correlationData: 9,
        maximumQoS: 36,
        retainAvailable: 37,
        assignedClientIdentifier: 18,
        reasonString: 31,
        wildcardSubscriptionAvailable: 40,
        subscriptionIdentifiersAvailable: 41,
        sharedSubscriptionAvailable: 42,
        serverKeepAlive: 19,
        responseInformation: 26,
        serverReference: 28,
        topicAlias: 35,
        subscriptionIdentifier: 11,
      }),
      (i.propertiesCodes = {}),
      i.properties)) {
        let t = i.properties[e];
        i.propertiesCodes[t] = e;
      }
      function o(e) {
        return [0, 1, 2].map((t) =>
          [0, 1].map((r) =>
            [0, 1].map((o) => {
              let s = n.alloc(1);
              return (
                s.writeUInt8(
                  (i.codes[e] << i.CMD_SHIFT) |
                    (r ? i.DUP_MASK : 0) |
                    (t << i.QOS_SHIFT) |
                    o,
                  0,
                  !0
                ),
                s
              );
            })
          )
        );
      }
      (i.propertiesTypes = {
        sessionExpiryInterval: "int32",
        willDelayInterval: "int32",
        receiveMaximum: "int16",
        maximumPacketSize: "int32",
        topicAliasMaximum: "int16",
        requestResponseInformation: "byte",
        requestProblemInformation: "byte",
        userProperties: "pair",
        authenticationMethod: "string",
        authenticationData: "binary",
        payloadFormatIndicator: "byte",
        messageExpiryInterval: "int32",
        contentType: "string",
        responseTopic: "string",
        correlationData: "binary",
        maximumQoS: "int8",
        retainAvailable: "byte",
        assignedClientIdentifier: "string",
        reasonString: "string",
        wildcardSubscriptionAvailable: "byte",
        subscriptionIdentifiersAvailable: "byte",
        sharedSubscriptionAvailable: "byte",
        serverKeepAlive: "int16",
        responseInformation: "string",
        serverReference: "string",
        topicAlias: "int16",
        subscriptionIdentifier: "var",
      }),
        (i.PUBLISH_HEADER = o("publish")),
        (i.SUBSCRIBE_HEADER = o("subscribe")),
        (i.SUBSCRIBE_OPTIONS_QOS_MASK = 3),
        (i.SUBSCRIBE_OPTIONS_NL_MASK = 1),
        (i.SUBSCRIBE_OPTIONS_NL_SHIFT = 2),
        (i.SUBSCRIBE_OPTIONS_RAP_MASK = 1),
        (i.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3),
        (i.SUBSCRIBE_OPTIONS_RH_MASK = 3),
        (i.SUBSCRIBE_OPTIONS_RH_SHIFT = 4),
        (i.SUBSCRIBE_OPTIONS_RH = [0, 16, 32]),
        (i.SUBSCRIBE_OPTIONS_NL = 4),
        (i.SUBSCRIBE_OPTIONS_RAP = 8),
        (i.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2]),
        (i.UNSUBSCRIBE_HEADER = o("unsubscribe")),
        (i.ACKS = {
          unsuback: o("unsuback"),
          puback: o("puback"),
          pubcomp: o("pubcomp"),
          pubrel: o("pubrel"),
          pubrec: o("pubrec"),
        }),
        (i.SUBACK_HEADER = n.from([
          i.codes.suback << i.CMD_SHIFT,
        ])),
        (i.VERSION3 = n.from([3])),
        (i.VERSION4 = n.from([4])),
        (i.VERSION5 = n.from([5])),
        (i.VERSION131 = n.from([131])),
        (i.VERSION132 = n.from([132])),
        (i.QOS = [0, 1, 2].map((e) => n.from([e]))),
        (i.EMPTY = {
          pingreq: n.from([i.codes.pingreq << 4, 0]),
          pingresp: n.from([i.codes.pingresp << 4, 0]),
          disconnect: n.from([i.codes.disconnect << 4, 0]),
        });
    },
    3358: function (e, t, r) {
      var n = r(1620).Buffer;
      let i = r(5952),
        o = r(2100);
      class s extends o {
        constructor() {
          super(), (this._array = Array(20)), (this._i = 0);
        }
        write(e) {
          return (this._array[this._i++] = e), !0;
        }
        concat() {
          let e,
            t = 0,
            r = Array(this._array.length),
            i = this._array,
            o = 0;
          for (e = 0; e < i.length && void 0 !== i[e]; e++)
            "string" != typeof i[e]
              ? (r[e] = i[e].length)
              : (r[e] = n.byteLength(i[e])),
              (t += r[e]);
          let s = n.allocUnsafe(t);
          for (e = 0; e < i.length && void 0 !== i[e]; e++)
            "string" != typeof i[e]
              ? (i[e].copy(s, o), (o += r[e]))
              : (s.write(i[e], o), (o += r[e]));
          return s;
        }
      }
      e.exports = function (e, t) {
        let r = new s();
        return i(e, r, t), r.concat();
      };
    },
    6360: function (e, t, r) {
      (t.parser = r(1169).parser),
        (t.generate = r(3358)),
        (t.writeToStream = r(5952));
    },
    1156: function (e, t, r) {
      var n = r(1620).Buffer;
      let i = {},
        o = n.isBuffer(n.from([1, 2]).subarray(0, 1));
      function s(e) {
        let t = n.allocUnsafe(2);
        return (
          t.writeUInt8(e >> 8, 0),
          t.writeUInt8(255 & e, 1),
          t
        );
      }
      e.exports = {
        cache: i,
        generateCache: function () {
          for (let e = 0; e < 65536; e++) i[e] = s(e);
        },
        generateNumber: s,
        genBufVariableByteInt: function (e) {
          let t = 0,
            r = 0,
            i = n.allocUnsafe(4);
          do
            (t = e % 128 | 0),
              (e = (e / 128) | 0) > 0 && (t |= 128),
              i.writeUInt8(t, r++);
          while (e > 0 && r < 4);
          return (
            e > 0 && (r = 0),
            o ? i.subarray(0, r) : i.slice(0, r)
          );
        },
        generate4ByteBuffer: function (e) {
          let t = n.allocUnsafe(4);
          return t.writeUInt32BE(e, 0), t;
        },
      };
    },
    1467: function (e) {
      e.exports = class {
        constructor() {
          (this.cmd = null),
            (this.retain = !1),
            (this.qos = 0),
            (this.dup = !1),
            (this.length = -1),
            (this.topic = null),
            (this.payload = null);
        }
      };
    },
    1169: function (e, t, r) {
      let n = r(3163),
        i = r(2100),
        o = r(1467),
        s = r(9372),
        a = r(7820)("mqtt-packet:parser");
      class u extends i {
        constructor() {
          super(), (this.parser = this.constructor.parser);
        }
        static parser(e) {
          return this instanceof u
            ? ((this.settings = e || {}),
              (this._states = [
                "_parseHeader",
                "_parseLength",
                "_parsePayload",
                "_newPacket",
              ]),
              this._resetState(),
              this)
            : new u().parser(e);
        }
        _resetState() {
          a(
            "_resetState: resetting packet, error, _list, and _stateCounter"
          ),
            (this.packet = new o()),
            (this.error = null),
            (this._list = n()),
            (this._stateCounter = 0);
        }
        parse(e) {
          for (
            this.error && this._resetState(),
              this._list.append(e),
              a(
                "parse: current state: %s",
                this._states[this._stateCounter]
              );
            (-1 !== this.packet.length ||
              this._list.length > 0) &&
            this[this._states[this._stateCounter]]() &&
            !this.error;

          )
            this._stateCounter++,
              a(
                "parse: state complete. _stateCounter is now: %d",
                this._stateCounter
              ),
              a(
                "parse: packet.length: %d, buffer list length: %d",
                this.packet.length,
                this._list.length
              ),
              this._stateCounter >= this._states.length &&
                (this._stateCounter = 0);
          return (
            a(
              "parse: exited while loop. packet: %d, buffer list length: %d",
              this.packet.length,
              this._list.length
            ),
            this._list.length
          );
        }
        _parseHeader() {
          let e = this._list.readUInt8(0);
          return (
            (this.packet.cmd = s.types[e >> s.CMD_SHIFT]),
            (this.packet.retain = (e & s.RETAIN_MASK) != 0),
            (this.packet.qos =
              (e >> s.QOS_SHIFT) & s.QOS_MASK),
            (this.packet.dup = (e & s.DUP_MASK) != 0),
            a("_parseHeader: packet: %o", this.packet),
            this._list.consume(1),
            !0
          );
        }
        _parseLength() {
          let e = this._parseVarByteNum(!0);
          return (
            e &&
              ((this.packet.length = e.value),
              this._list.consume(e.bytes)),
            a("_parseLength %d", e.value),
            !!e
          );
        }
        _parsePayload() {
          a("_parsePayload: payload %O", this._list);
          let e = !1;
          if (
            0 === this.packet.length ||
            this._list.length >= this.packet.length
          ) {
            switch (((this._pos = 0), this.packet.cmd)) {
              case "connect":
                this._parseConnect();
                break;
              case "connack":
                this._parseConnack();
                break;
              case "publish":
                this._parsePublish();
                break;
              case "puback":
              case "pubrec":
              case "pubrel":
              case "pubcomp":
                this._parseConfirmation();
                break;
              case "subscribe":
                this._parseSubscribe();
                break;
              case "suback":
                this._parseSuback();
                break;
              case "unsubscribe":
                this._parseUnsubscribe();
                break;
              case "unsuback":
                this._parseUnsuback();
                break;
              case "pingreq":
              case "pingresp":
                break;
              case "disconnect":
                this._parseDisconnect();
                break;
              case "auth":
                this._parseAuth();
                break;
              default:
                this._emitError(Error("Not supported"));
            }
            e = !0;
          }
          return (
            a("_parsePayload complete result: %s", e), e
          );
        }
        _parseConnect() {
          let e, t, r, n;
          a("_parseConnect");
          let i = {},
            o = this.packet,
            u = this._parseString();
          if (null === u)
            return this._emitError(
              Error("Cannot parse protocolId")
            );
          if ("MQTT" !== u && "MQIsdp" !== u)
            return this._emitError(
              Error("Invalid protocolId")
            );
          if (
            ((o.protocolId = u),
            this._pos >= this._list.length)
          )
            return this._emitError(
              Error("Packet too short")
            );
          if (
            ((o.protocolVersion = this._list.readUInt8(
              this._pos
            )),
            o.protocolVersion >= 128 &&
              ((o.bridgeMode = !0),
              (o.protocolVersion =
                o.protocolVersion - 128)),
            3 !== o.protocolVersion &&
              4 !== o.protocolVersion &&
              5 !== o.protocolVersion)
          )
            return this._emitError(
              Error("Invalid protocol version")
            );
          if (
            (this._pos++,
            this._pos >= this._list.length ||
              ((i.username =
                this._list.readUInt8(this._pos) &
                s.USERNAME_MASK),
              (i.password =
                this._list.readUInt8(this._pos) &
                s.PASSWORD_MASK),
              (i.will =
                this._list.readUInt8(this._pos) &
                s.WILL_FLAG_MASK),
              i.will &&
                ((o.will = {}),
                (o.will.retain =
                  (this._list.readUInt8(this._pos) &
                    s.WILL_RETAIN_MASK) !=
                  0),
                (o.will.qos =
                  (this._list.readUInt8(this._pos) &
                    s.WILL_QOS_MASK) >>
                  s.WILL_QOS_SHIFT)),
              (o.clean =
                (this._list.readUInt8(this._pos) &
                  s.CLEAN_SESSION_MASK) !=
                0),
              this._pos++,
              (o.keepalive = this._parseNum()),
              -1 === o.keepalive))
          )
            return this._emitError(
              Error("Packet too short")
            );
          if (5 === o.protocolVersion) {
            let e = this._parseProperties();
            Object.getOwnPropertyNames(e).length &&
              (o.properties = e);
          }
          let l = this._parseString();
          if (null === l)
            return this._emitError(
              Error("Packet too short")
            );
          if (
            ((o.clientId = l),
            a(
              "_parseConnect: packet.clientId: %s",
              o.clientId
            ),
            i.will)
          ) {
            if (5 === o.protocolVersion) {
              let e = this._parseProperties();
              Object.getOwnPropertyNames(e).length &&
                (o.will.properties = e);
            }
            if (null === (e = this._parseString()))
              return this._emitError(
                Error("Cannot parse will topic")
              );
            if (
              ((o.will.topic = e),
              a(
                "_parseConnect: packet.will.topic: %s",
                o.will.topic
              ),
              null === (t = this._parseBuffer()))
            )
              return this._emitError(
                Error("Cannot parse will payload")
              );
            (o.will.payload = t),
              a(
                "_parseConnect: packet.will.paylaod: %s",
                o.will.payload
              );
          }
          if (i.username) {
            if (null === (n = this._parseString()))
              return this._emitError(
                Error("Cannot parse username")
              );
            (o.username = n),
              a(
                "_parseConnect: packet.username: %s",
                o.username
              );
          }
          if (i.password) {
            if (null === (r = this._parseBuffer()))
              return this._emitError(
                Error("Cannot parse password")
              );
            o.password = r;
          }
          return (
            (this.settings = o),
            a("_parseConnect: complete"),
            o
          );
        }
        _parseConnack() {
          a("_parseConnack");
          let e = this.packet;
          if (this._list.length < 1) return null;
          if (
            ((e.sessionPresent = !!(
              this._list.readUInt8(this._pos++) &
              s.SESSIONPRESENT_MASK
            )),
            5 === this.settings.protocolVersion)
          )
            this._list.length >= 2
              ? (e.reasonCode = this._list.readUInt8(
                  this._pos++
                ))
              : (e.reasonCode = 0);
          else {
            if (this._list.length < 2) return null;
            e.returnCode = this._list.readUInt8(
              this._pos++
            );
          }
          if (-1 === e.returnCode || -1 === e.reasonCode)
            return this._emitError(
              Error("Cannot parse return code")
            );
          if (5 === this.settings.protocolVersion) {
            let t = this._parseProperties();
            Object.getOwnPropertyNames(t).length &&
              (e.properties = t);
          }
          a("_parseConnack: complete");
        }
        _parsePublish() {
          a("_parsePublish");
          let e = this.packet;
          if (
            ((e.topic = this._parseString()),
            null === e.topic)
          )
            return this._emitError(
              Error("Cannot parse topic")
            );
          if (!(e.qos > 0) || this._parseMessageId()) {
            if (5 === this.settings.protocolVersion) {
              let t = this._parseProperties();
              Object.getOwnPropertyNames(t).length &&
                (e.properties = t);
            }
            (e.payload = this._list.slice(
              this._pos,
              e.length
            )),
              a(
                "_parsePublish: payload from buffer list: %o",
                e.payload
              );
          }
        }
        _parseSubscribe() {
          let e, t, r, n, i, o, u;
          a("_parseSubscribe");
          let l = this.packet;
          if (1 !== l.qos)
            return this._emitError(
              Error("Wrong subscribe header")
            );
          if (
            ((l.subscriptions = []), this._parseMessageId())
          ) {
            if (5 === this.settings.protocolVersion) {
              let e = this._parseProperties();
              Object.getOwnPropertyNames(e).length &&
                (l.properties = e);
            }
            for (; this._pos < l.length; ) {
              if (null === (e = this._parseString()))
                return this._emitError(
                  Error("Cannot parse topic")
                );
              if (this._pos >= l.length)
                return this._emitError(
                  Error("Malformed Subscribe Payload")
                );
              (r =
                (t = this._parseByte()) &
                s.SUBSCRIBE_OPTIONS_QOS_MASK),
                (o =
                  ((t >> s.SUBSCRIBE_OPTIONS_NL_SHIFT) &
                    s.SUBSCRIBE_OPTIONS_NL_MASK) !=
                  0),
                (i =
                  ((t >> s.SUBSCRIBE_OPTIONS_RAP_SHIFT) &
                    s.SUBSCRIBE_OPTIONS_RAP_MASK) !=
                  0),
                (n =
                  (t >> s.SUBSCRIBE_OPTIONS_RH_SHIFT) &
                  s.SUBSCRIBE_OPTIONS_RH_MASK),
                (u = { topic: e, qos: r }),
                5 === this.settings.protocolVersion
                  ? ((u.nl = o), (u.rap = i), (u.rh = n))
                  : this.settings.bridgeMode &&
                    ((u.rh = 0), (u.rap = !0), (u.nl = !0)),
                a(
                  "_parseSubscribe: push subscription `%s` to subscription",
                  u
                ),
                l.subscriptions.push(u);
            }
          }
        }
        _parseSuback() {
          a("_parseSuback");
          let e = this.packet;
          if (
            ((this.packet.granted = []),
            this._parseMessageId())
          ) {
            if (5 === this.settings.protocolVersion) {
              let t = this._parseProperties();
              Object.getOwnPropertyNames(t).length &&
                (e.properties = t);
            }
            for (; this._pos < this.packet.length; )
              this.packet.granted.push(
                this._list.readUInt8(this._pos++)
              );
          }
        }
        _parseUnsubscribe() {
          a("_parseUnsubscribe");
          let e = this.packet;
          if (
            ((e.unsubscriptions = []),
            this._parseMessageId())
          ) {
            if (5 === this.settings.protocolVersion) {
              let t = this._parseProperties();
              Object.getOwnPropertyNames(t).length &&
                (e.properties = t);
            }
            for (; this._pos < e.length; ) {
              let t = this._parseString();
              if (null === t)
                return this._emitError(
                  Error("Cannot parse topic")
                );
              a(
                "_parseUnsubscribe: push topic `%s` to unsubscriptions",
                t
              ),
                e.unsubscriptions.push(t);
            }
          }
        }
        _parseUnsuback() {
          a("_parseUnsuback");
          let e = this.packet;
          if (!this._parseMessageId())
            return this._emitError(
              Error("Cannot parse messageId")
            );
          if (5 === this.settings.protocolVersion) {
            let t = this._parseProperties();
            for (
              Object.getOwnPropertyNames(t).length &&
                (e.properties = t),
                e.granted = [];
              this._pos < this.packet.length;

            )
              this.packet.granted.push(
                this._list.readUInt8(this._pos++)
              );
          }
        }
        _parseConfirmation() {
          a(
            "_parseConfirmation: packet.cmd: `%s`",
            this.packet.cmd
          );
          let e = this.packet;
          if (
            (this._parseMessageId(),
            5 === this.settings.protocolVersion &&
              (e.length > 2
                ? ((e.reasonCode = this._parseByte()),
                  a(
                    "_parseConfirmation: packet.reasonCode `%d`",
                    e.reasonCode
                  ))
                : (e.reasonCode = 0),
              e.length > 3))
          ) {
            let t = this._parseProperties();
            Object.getOwnPropertyNames(t).length &&
              (e.properties = t);
          }
          return !0;
        }
        _parseDisconnect() {
          let e = this.packet;
          if (
            (a("_parseDisconnect"),
            5 === this.settings.protocolVersion)
          ) {
            this._list.length > 0
              ? (e.reasonCode = this._parseByte())
              : (e.reasonCode = 0);
            let t = this._parseProperties();
            Object.getOwnPropertyNames(t).length &&
              (e.properties = t);
          }
          return a("_parseDisconnect result: true"), !0;
        }
        _parseAuth() {
          a("_parseAuth");
          let e = this.packet;
          if (5 !== this.settings.protocolVersion)
            return this._emitError(
              Error(
                "Not supported auth packet for this version MQTT"
              )
            );
          e.reasonCode = this._parseByte();
          let t = this._parseProperties();
          return (
            Object.getOwnPropertyNames(t).length &&
              (e.properties = t),
            a("_parseAuth: result: true"),
            !0
          );
        }
        _parseMessageId() {
          let e = this.packet;
          return ((e.messageId = this._parseNum()),
          null === e.messageId)
            ? (this._emitError(
                Error("Cannot parse messageId")
              ),
              !1)
            : (a(
                "_parseMessageId: packet.messageId %d",
                e.messageId
              ),
              !0);
        }
        _parseString(e) {
          let t = this._parseNum(),
            r = t + this._pos;
          if (
            -1 === t ||
            r > this._list.length ||
            r > this.packet.length
          )
            return null;
          let n = this._list.toString("utf8", this._pos, r);
          return (
            (this._pos += t),
            a("_parseString: result: %s", n),
            n
          );
        }
        _parseStringPair() {
          return (
            a("_parseStringPair"),
            {
              name: this._parseString(),
              value: this._parseString(),
            }
          );
        }
        _parseBuffer() {
          let e = this._parseNum(),
            t = e + this._pos;
          if (
            -1 === e ||
            t > this._list.length ||
            t > this.packet.length
          )
            return null;
          let r = this._list.slice(this._pos, t);
          return (
            (this._pos += e),
            a("_parseBuffer: result: %o", r),
            r
          );
        }
        _parseNum() {
          if (this._list.length - this._pos < 2) return -1;
          let e = this._list.readUInt16BE(this._pos);
          return (
            (this._pos += 2),
            a("_parseNum: result: %s", e),
            e
          );
        }
        _parse4ByteNum() {
          if (this._list.length - this._pos < 4) return -1;
          let e = this._list.readUInt32BE(this._pos);
          return (
            (this._pos += 4),
            a("_parse4ByteNum: result: %s", e),
            e
          );
        }
        _parseVarByteNum(e) {
          let t;
          a("_parseVarByteNum");
          let r = 0,
            n = 1,
            i = 0,
            o = !1,
            u = this._pos ? this._pos : 0;
          for (; r < 4 && u + r < this._list.length; ) {
            if (
              ((i +=
                n *
                ((t = this._list.readUInt8(u + r++)) &
                  s.VARBYTEINT_MASK)),
              (n *= 128),
              (t & s.VARBYTEINT_FIN_MASK) == 0)
            ) {
              o = !0;
              break;
            }
            if (this._list.length <= r) break;
          }
          return (
            !o &&
              4 === r &&
              this._list.length >= r &&
              this._emitError(
                Error("Invalid variable byte integer")
              ),
            u && (this._pos += r),
            a(
              "_parseVarByteNum: result: %o",
              (o = !!o && (e ? { bytes: r, value: i } : i))
            ),
            o
          );
        }
        _parseByte() {
          let e;
          return (
            this._pos < this._list.length &&
              ((e = this._list.readUInt8(this._pos)),
              this._pos++),
            a("_parseByte: result: %o", e),
            e
          );
        }
        _parseByType(e) {
          switch ((a("_parseByType: type: %s", e), e)) {
            case "byte":
              return 0 !== this._parseByte();
            case "int8":
              return this._parseByte();
            case "int16":
              return this._parseNum();
            case "int32":
              return this._parse4ByteNum();
            case "var":
              return this._parseVarByteNum();
            case "string":
              return this._parseString();
            case "pair":
              return this._parseStringPair();
            case "binary":
              return this._parseBuffer();
          }
        }
        _parseProperties() {
          a("_parseProperties");
          let e = this._parseVarByteNum(),
            t = this._pos,
            r = t + e,
            n = {};
          for (; this._pos < r; ) {
            let e = this._parseByte();
            if (!e)
              return (
                this._emitError(
                  Error("Cannot parse property code type")
                ),
                !1
              );
            let t = s.propertiesCodes[e];
            if (!t)
              return (
                this._emitError(Error("Unknown property")),
                !1
              );
            if ("userProperties" === t) {
              n[t] || (n[t] = Object.create(null));
              let e = this._parseByType(
                s.propertiesTypes[t]
              );
              if (n[t][e.name]) {
                if (Array.isArray(n[t][e.name]))
                  n[t][e.name].push(e.value);
                else {
                  let r = n[t][e.name];
                  (n[t][e.name] = [r]),
                    n[t][e.name].push(e.value);
                }
              } else n[t][e.name] = e.value;
              continue;
            }
            n[t]
              ? (Array.isArray(n[t]) || (n[t] = [n[t]]),
                n[t].push(
                  this._parseByType(s.propertiesTypes[t])
                ))
              : (n[t] = this._parseByType(
                  s.propertiesTypes[t]
                ));
          }
          return n;
        }
        _newPacket() {
          return (
            a("_newPacket"),
            this.packet &&
              (this._list.consume(this.packet.length),
              a(
                "_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",
                this.packet.cmd,
                this.packet.payload,
                this.packet.length
              ),
              this.emit("packet", this.packet)),
            a("_newPacket: new packet"),
            (this.packet = new o()),
            (this._pos = 0),
            !0
          );
        }
        _emitError(e) {
          a("_emitError"),
            (this.error = e),
            this.emit("error", e);
        }
      }
      e.exports = u;
    },
    5952: function (e, t, r) {
      var n = r(1620).Buffer;
      let i = r(9372),
        o = n.allocUnsafe(0),
        s = n.from([0]),
        a = r(1156),
        u = r(1233).nextTick,
        l = r(7820)("mqtt-packet:writeToStream"),
        c = a.cache,
        h = a.generateNumber,
        f = a.generateCache,
        p = a.genBufVariableByteInt,
        d = a.generate4ByteBuffer,
        g = S,
        y = !0;
      function b(e, t, r) {
        switch (
          (l("generate called"),
          t.cork && (t.cork(), u(m, t)),
          y && ((y = !1), f()),
          l("generate: packet.cmd: %s", e.cmd),
          e.cmd)
        ) {
          case "connect":
            return (function (e, t, r) {
              let o;
              let s = e || {},
                a = s.protocolId || "MQTT",
                u = s.protocolVersion || 4,
                l = s.will,
                c = s.clean,
                h = s.keepalive || 0,
                f = s.clientId || "",
                p = s.username,
                d = s.password,
                y = s.properties;
              void 0 === c && (c = !0);
              let b = 0;
              if (
                !a ||
                ("string" != typeof a && !n.isBuffer(a))
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid protocolId")
                  ),
                  !1
                );
              if (
                ((b += a.length + 2),
                3 !== u && 4 !== u && 5 !== u)
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid protocol version")
                  ),
                  !1
                );
              if (
                ((b += 1),
                ("string" == typeof f || n.isBuffer(f)) &&
                  (f || u >= 4) &&
                  (f || c))
              )
                b += n.byteLength(f) + 2;
              else {
                if (u < 4)
                  return (
                    t.emit(
                      "error",
                      Error(
                        "clientId must be supplied before 3.1.1"
                      )
                    ),
                    !1
                  );
                if (1 * c == 0)
                  return (
                    t.emit(
                      "error",
                      Error(
                        "clientId must be given if cleanSession set to 0"
                      )
                    ),
                    !1
                  );
              }
              if (
                "number" != typeof h ||
                h < 0 ||
                h > 65535 ||
                h % 1 != 0
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid keepalive")
                  ),
                  !1
                );
              if (((b += 3), 5 === u)) {
                var m = A(t, y);
                if (!m) return !1;
                b += m.length;
              }
              if (l) {
                if ("object" != typeof l)
                  return (
                    t.emit("error", Error("Invalid will")),
                    !1
                  );
                if (!l.topic || "string" != typeof l.topic)
                  return (
                    t.emit(
                      "error",
                      Error("Invalid will topic")
                    ),
                    !1
                  );
                if (
                  ((b += n.byteLength(l.topic) + 2 + 2),
                  l.payload)
                ) {
                  if (!(l.payload.length >= 0))
                    return (
                      t.emit(
                        "error",
                        Error("Invalid will payload")
                      ),
                      !1
                    );
                  "string" == typeof l.payload
                    ? (b += n.byteLength(l.payload))
                    : (b += l.payload.length);
                }
                var v = {};
                if (5 === u) {
                  if (!(v = A(t, l.properties))) return !1;
                  b += v.length;
                }
              }
              let S = !1;
              if (null != p) {
                if (!x(p))
                  return (
                    t.emit(
                      "error",
                      Error("Invalid username")
                    ),
                    !1
                  );
                (S = !0), (b += n.byteLength(p) + 2);
              }
              if (null != d) {
                if (!S)
                  return (
                    t.emit(
                      "error",
                      Error(
                        "Username is required to use password"
                      )
                    ),
                    !1
                  );
                if (!x(d))
                  return (
                    t.emit(
                      "error",
                      Error("Invalid password")
                    ),
                    !1
                  );
                b += P(d) + 2;
              }
              return (
                t.write(i.CONNECT_HEADER),
                _(t, b),
                k(t, a),
                s.bridgeMode && (u += 128),
                t.write(
                  131 === u
                    ? i.VERSION131
                    : 132 === u
                    ? i.VERSION132
                    : 4 === u
                    ? i.VERSION4
                    : 5 === u
                    ? i.VERSION5
                    : i.VERSION3
                ),
                (o =
                  0 |
                  (null != p ? i.USERNAME_MASK : 0) |
                  (null != d ? i.PASSWORD_MASK : 0) |
                  (l && l.retain ? i.WILL_RETAIN_MASK : 0) |
                  (l && l.qos
                    ? l.qos << i.WILL_QOS_SHIFT
                    : 0) |
                  (l ? i.WILL_FLAG_MASK : 0) |
                  (c ? i.CLEAN_SESSION_MASK : 0)),
                t.write(n.from([o])),
                g(t, h),
                5 === u && m.write(),
                k(t, f),
                l &&
                  (5 === u && v.write(),
                  w(t, l.topic),
                  k(t, l.payload)),
                null != p && k(t, p),
                null != d && k(t, d),
                !0
              );
            })(e, t, 0);
          case "connack":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                a = e || {},
                u = 5 === o ? a.reasonCode : a.returnCode,
                l = a.properties,
                c = 2;
              if ("number" != typeof u)
                return (
                  t.emit(
                    "error",
                    Error("Invalid return code")
                  ),
                  !1
                );
              let h = null;
              if (5 === o) {
                if (!(h = A(t, l))) return !1;
                c += h.length;
              }
              return (
                t.write(i.CONNACK_HEADER),
                _(t, c),
                t.write(
                  a.sessionPresent
                    ? i.SESSIONPRESENT_HEADER
                    : s
                ),
                t.write(n.from([u])),
                null != h && h.write(),
                !0
              );
            })(e, t, r);
          case "publish":
            return (function (e, t, r) {
              l("publish: packet: %o", e);
              let s = r ? r.protocolVersion : 4,
                a = e || {},
                u = a.qos || 0,
                c = a.retain ? i.RETAIN_MASK : 0,
                h = a.topic,
                f = a.payload || o,
                p = a.messageId,
                d = a.properties,
                y = 0;
              if ("string" == typeof h)
                y += n.byteLength(h) + 2;
              else {
                if (!n.isBuffer(h))
                  return (
                    t.emit("error", Error("Invalid topic")),
                    !1
                  );
                y += h.length + 2;
              }
              if (
                (n.isBuffer(f)
                  ? (y += f.length)
                  : (y += n.byteLength(f)),
                u && "number" != typeof p)
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid messageId")
                  ),
                  !1
                );
              u && (y += 2);
              let b = null;
              if (5 === s) {
                if (!(b = A(t, d))) return !1;
                y += b.length;
              }
              return (
                t.write(
                  i.PUBLISH_HEADER[u][a.dup ? 1 : 0][
                    c ? 1 : 0
                  ]
                ),
                _(t, y),
                g(t, P(h)),
                t.write(h),
                u > 0 && g(t, p),
                null != b && b.write(),
                l("publish: payload: %o", f),
                t.write(f)
              );
            })(e, t, r);
          case "puback":
          case "pubrec":
          case "pubrel":
          case "pubcomp":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.cmd || "puback",
                u = s.messageId,
                l =
                  s.dup && "pubrel" === a ? i.DUP_MASK : 0,
                c = 0,
                h = s.reasonCode,
                f = s.properties,
                p = 5 === o ? 3 : 2;
              if (
                ("pubrel" === a && (c = 1),
                "number" != typeof u)
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid messageId")
                  ),
                  !1
                );
              let d = null;
              if (5 === o && "object" == typeof f) {
                if (!(d = I(t, f, r, p))) return !1;
                p += d.length;
              }
              return (
                t.write(i.ACKS[a][c][l][0]),
                _(t, p),
                g(t, u),
                5 === o && t.write(n.from([h])),
                null !== d && d.write(),
                !0
              );
            })(e, t, r);
          case "subscribe":
            return (function (e, t, r) {
              l("subscribe: packet: ");
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.dup ? i.DUP_MASK : 0,
                u = s.messageId,
                c = s.subscriptions,
                h = s.properties,
                f = 0;
              if ("number" != typeof u)
                return (
                  t.emit(
                    "error",
                    Error("Invalid messageId")
                  ),
                  !1
                );
              f += 2;
              let p = null;
              if (5 === o) {
                if (!(p = A(t, h))) return !1;
                f += p.length;
              }
              if ("object" != typeof c || !c.length)
                return (
                  t.emit(
                    "error",
                    Error("Invalid subscriptions")
                  ),
                  !1
                );
              for (let e = 0; e < c.length; e += 1) {
                let r = c[e].topic,
                  i = c[e].qos;
                if ("string" != typeof r)
                  return (
                    t.emit(
                      "error",
                      Error(
                        "Invalid subscriptions - invalid topic"
                      )
                    ),
                    !1
                  );
                if ("number" != typeof i)
                  return (
                    t.emit(
                      "error",
                      Error(
                        "Invalid subscriptions - invalid qos"
                      )
                    ),
                    !1
                  );
                if (5 === o) {
                  let r = c[e].nl || !1;
                  if ("boolean" != typeof r)
                    return (
                      t.emit(
                        "error",
                        Error(
                          "Invalid subscriptions - invalid No Local"
                        )
                      ),
                      !1
                    );
                  let n = c[e].rap || !1;
                  if ("boolean" != typeof n)
                    return (
                      t.emit(
                        "error",
                        Error(
                          "Invalid subscriptions - invalid Retain as Published"
                        )
                      ),
                      !1
                    );
                  let i = c[e].rh || 0;
                  if ("number" != typeof i || i > 2)
                    return (
                      t.emit(
                        "error",
                        Error(
                          "Invalid subscriptions - invalid Retain Handling"
                        )
                      ),
                      !1
                    );
                }
                f += n.byteLength(r) + 2 + 1;
              }
              l(
                "subscribe: writing to stream: %o",
                i.SUBSCRIBE_HEADER
              ),
                t.write(
                  i.SUBSCRIBE_HEADER[1][a ? 1 : 0][0]
                ),
                _(t, f),
                g(t, u),
                null !== p && p.write();
              let d = !0;
              for (let e of c) {
                let r;
                let s = e.topic,
                  a = e.qos,
                  u = +e.nl,
                  l = +e.rap,
                  c = e.rh;
                w(t, s),
                  (r = i.SUBSCRIBE_OPTIONS_QOS[a]),
                  5 === o &&
                    ((r |= u ? i.SUBSCRIBE_OPTIONS_NL : 0),
                    (r |= l ? i.SUBSCRIBE_OPTIONS_RAP : 0),
                    (r |= c
                      ? i.SUBSCRIBE_OPTIONS_RH[c]
                      : 0)),
                  (d = t.write(n.from([r])));
              }
              return d;
            })(e, t, r);
          case "suback":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.messageId,
                u = s.granted,
                l = s.properties,
                c = 0;
              if ("number" != typeof a)
                return (
                  t.emit(
                    "error",
                    Error("Invalid messageId")
                  ),
                  !1
                );
              if (
                ((c += 2),
                "object" != typeof u || !u.length)
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid qos vector")
                  ),
                  !1
                );
              for (let e = 0; e < u.length; e += 1) {
                if ("number" != typeof u[e])
                  return (
                    t.emit(
                      "error",
                      Error("Invalid qos vector")
                    ),
                    !1
                  );
                c += 1;
              }
              let h = null;
              if (5 === o) {
                if (!(h = I(t, l, r, c))) return !1;
                c += h.length;
              }
              return (
                t.write(i.SUBACK_HEADER),
                _(t, c),
                g(t, a),
                null !== h && h.write(),
                t.write(n.from(u))
              );
            })(e, t, r);
          case "unsubscribe":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.messageId,
                u = s.dup ? i.DUP_MASK : 0,
                l = s.unsubscriptions,
                c = s.properties,
                h = 0;
              if ("number" != typeof a)
                return (
                  t.emit(
                    "error",
                    Error("Invalid messageId")
                  ),
                  !1
                );
              if (
                ((h += 2),
                "object" != typeof l || !l.length)
              )
                return (
                  t.emit(
                    "error",
                    Error("Invalid unsubscriptions")
                  ),
                  !1
                );
              for (let e = 0; e < l.length; e += 1) {
                if ("string" != typeof l[e])
                  return (
                    t.emit(
                      "error",
                      Error("Invalid unsubscriptions")
                    ),
                    !1
                  );
                h += n.byteLength(l[e]) + 2;
              }
              let f = null;
              if (5 === o) {
                if (!(f = A(t, c))) return !1;
                h += f.length;
              }
              t.write(
                i.UNSUBSCRIBE_HEADER[1][u ? 1 : 0][0]
              ),
                _(t, h),
                g(t, a),
                null !== f && f.write();
              let p = !0;
              for (let e = 0; e < l.length; e++)
                p = w(t, l[e]);
              return p;
            })(e, t, r);
          case "unsuback":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.messageId,
                u = s.dup ? i.DUP_MASK : 0,
                l = s.granted,
                c = s.properties,
                h = s.cmd,
                f = 2;
              if ("number" != typeof a)
                return (
                  t.emit(
                    "error",
                    Error("Invalid messageId")
                  ),
                  !1
                );
              if (5 === o) {
                if ("object" != typeof l || !l.length)
                  return (
                    t.emit(
                      "error",
                      Error("Invalid qos vector")
                    ),
                    !1
                  );
                for (let e = 0; e < l.length; e += 1) {
                  if ("number" != typeof l[e])
                    return (
                      t.emit(
                        "error",
                        Error("Invalid qos vector")
                      ),
                      !1
                    );
                  f += 1;
                }
              }
              let p = null;
              if (5 === o) {
                if (!(p = I(t, c, r, f))) return !1;
                f += p.length;
              }
              return (
                t.write(i.ACKS[h][0][u][0]),
                _(t, f),
                g(t, a),
                null !== p && p.write(),
                5 === o && t.write(n.from(l)),
                !0
              );
            })(e, t, r);
          case "pingreq":
          case "pingresp":
            return t.write(i.EMPTY[e.cmd]);
          case "disconnect":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.reasonCode,
                u = s.properties,
                l = 5 === o ? 1 : 0,
                c = null;
              if (5 === o) {
                if (!(c = I(t, u, r, l))) return !1;
                l += c.length;
              }
              return (
                t.write(n.from([i.codes.disconnect << 4])),
                _(t, l),
                5 === o && t.write(n.from([a])),
                null !== c && c.write(),
                !0
              );
            })(e, t, r);
          case "auth":
            return (function (e, t, r) {
              let o = r ? r.protocolVersion : 4,
                s = e || {},
                a = s.reasonCode,
                u = s.properties,
                l = 5 === o ? 1 : 0;
              5 !== o &&
                t.emit(
                  "error",
                  Error(
                    "Invalid mqtt version for auth packet"
                  )
                );
              let c = I(t, u, r, l);
              return (
                !!c &&
                ((l += c.length),
                t.write(n.from([i.codes.auth << 4])),
                _(t, l),
                t.write(n.from([a])),
                null !== c && c.write(),
                !0)
              );
            })(e, t, r);
          default:
            return (
              t.emit("error", Error("Unknown command")), !1
            );
        }
      }
      function m(e) {
        e.uncork();
      }
      Object.defineProperty(b, "cacheNumbers", {
        get: () => g === S,
        set(e) {
          e
            ? ((c && 0 !== Object.keys(c).length) ||
                (y = !0),
              (g = S))
            : ((y = !1), (g = E));
        },
      });
      let v = {};
      function _(e, t) {
        if (t > i.VARBYTEINT_MAX)
          return (
            e.emit(
              "error",
              Error(`Invalid variable byte integer: ${t}`)
            ),
            !1
          );
        let r = v[t];
        return (
          !r && ((r = p(t)), t < 16384 && (v[t] = r)),
          l("writeVarByteInt: writing to stream: %o", r),
          e.write(r)
        );
      }
      function w(e, t) {
        let r = n.byteLength(t);
        return (
          g(e, r),
          l("writeString: %s", t),
          e.write(t, "utf8")
        );
      }
      function S(e, t) {
        return (
          l("writeNumberCached: number: %d", t),
          l("writeNumberCached: %o", c[t]),
          e.write(c[t])
        );
      }
      function E(e, t) {
        let r = h(t);
        return l("writeNumberGenerated: %o", r), e.write(r);
      }
      function k(e, t) {
        "string" == typeof t
          ? w(e, t)
          : t
          ? (g(e, t.length), e.write(t))
          : g(e, 0);
      }
      function A(e, t) {
        if ("object" != typeof t || null != t.length)
          return {
            length: 1,
            write() {
              T(e, {}, 0);
            },
          };
        let r = 0;
        function o(t, r) {
          let o = i.propertiesTypes[t],
            s = 0;
          switch (o) {
            case "byte":
              if ("boolean" != typeof r)
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 2;
              break;
            case "int8":
              if ("number" != typeof r || r < 0 || r > 255)
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 2;
              break;
            case "binary":
              if (r && null === r)
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 1 + n.byteLength(r) + 2;
              break;
            case "int16":
              if (
                "number" != typeof r ||
                r < 0 ||
                r > 65535
              )
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 3;
              break;
            case "int32":
              if (
                "number" != typeof r ||
                r < 0 ||
                r > 4294967295
              )
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 5;
              break;
            case "var":
              if (
                "number" != typeof r ||
                r < 0 ||
                r > 268435455
              )
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 1 + n.byteLength(p(r));
              break;
            case "string":
              if ("string" != typeof r)
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += 3 + n.byteLength(r.toString());
              break;
            case "pair":
              if ("object" != typeof r)
                return (
                  e.emit(
                    "error",
                    Error(`Invalid ${t}: ${r}`)
                  ),
                  !1
                );
              s += Object.getOwnPropertyNames(r).reduce(
                (e, t) => {
                  let i = r[t];
                  return (
                    Array.isArray(i)
                      ? (e += i.reduce(
                          (e, r) =>
                            (e +=
                              3 +
                              n.byteLength(t.toString()) +
                              2 +
                              n.byteLength(r.toString())),
                          0
                        ))
                      : (e +=
                          3 +
                          n.byteLength(t.toString()) +
                          2 +
                          n.byteLength(r[t].toString())),
                    e
                  );
                },
                0
              );
              break;
            default:
              return (
                e.emit(
                  "error",
                  Error(`Invalid property ${t}: ${r}`)
                ),
                !1
              );
          }
          return s;
        }
        if (t)
          for (let e in t) {
            let n = 0,
              i = 0,
              s = t[e];
            if (Array.isArray(s))
              for (let t = 0; t < s.length; t++) {
                if (!(i = o(e, s[t]))) return !1;
                n += i;
              }
            else {
              if (!(i = o(e, s))) return !1;
              n = i;
            }
            if (!n) return !1;
            r += n;
          }
        let s = n.byteLength(p(r));
        return {
          length: s + r,
          write() {
            T(e, t, r);
          },
        };
      }
      function I(e, t, r, n) {
        let i = ["reasonString", "userProperties"],
          o =
            r &&
            r.properties &&
            r.properties.maximumPacketSize
              ? r.properties.maximumPacketSize
              : 0,
          s = A(e, t);
        if (o)
          for (; n + s.length > o; ) {
            let r = i.shift();
            if (!r || !t[r]) return !1;
            delete t[r], (s = A(e, t));
          }
        return s;
      }
      function C(e, t, r) {
        let o = i.propertiesTypes[t];
        switch (o) {
          case "byte":
            e.write(n.from([i.properties[t]])),
              e.write(n.from([+r]));
            break;
          case "int8":
            e.write(n.from([i.properties[t]])),
              e.write(n.from([r]));
            break;
          case "binary":
            e.write(n.from([i.properties[t]])), k(e, r);
            break;
          case "int16":
            e.write(n.from([i.properties[t]])), g(e, r);
            break;
          case "int32":
            e.write(n.from([i.properties[t]])),
              (function (e, t) {
                let r = d(t);
                l("write4ByteNumber: %o", r), e.write(r);
              })(e, r);
            break;
          case "var":
            e.write(n.from([i.properties[t]])), _(e, r);
            break;
          case "string":
            e.write(n.from([i.properties[t]])), w(e, r);
            break;
          case "pair":
            Object.getOwnPropertyNames(r).forEach((o) => {
              let s = r[o];
              if (Array.isArray(s))
                s.forEach((r) => {
                  var s, a;
                  e.write(n.from([i.properties[t]])),
                    (s = o.toString()),
                    (a = r.toString()),
                    w(e, s),
                    w(e, a);
                });
              else {
                var a, u;
                e.write(n.from([i.properties[t]])),
                  (a = o.toString()),
                  (u = s.toString()),
                  w(e, a),
                  w(e, u);
              }
            });
            break;
          default:
            return (
              e.emit(
                "error",
                Error(`Invalid property ${t} value: ${r}`)
              ),
              !1
            );
        }
      }
      function T(e, t, r) {
        for (let n in (_(e, r), t))
          if (
            Object.prototype.hasOwnProperty.call(t, n) &&
            null !== t[n]
          ) {
            let r = t[n];
            if (Array.isArray(r))
              for (let t = 0; t < r.length; t++)
                C(e, n, r[t]);
            else C(e, n, r);
          }
      }
      function P(e) {
        return e
          ? e instanceof n
            ? e.length
            : n.byteLength(e)
          : 0;
      }
      function x(e) {
        return "string" == typeof e || e instanceof n;
      }
      e.exports = b;
    },
    806: function (e, t, r) {
      "use strict";
      var n = r(4010);
      let i = r(2100).EventEmitter,
        o = r(7855),
        s = r(8279),
        a = r(2865),
        u = r(6360),
        l = r(5539),
        c = r(3745).Writable,
        h = r(2937),
        f = r(3949),
        p = r(2775),
        d = r(9126),
        g = r(6192),
        y = r(7820)("mqttjs:client"),
        b = n
          ? n.nextTick
          : function (e) {
              setTimeout(e, 0);
            },
        m =
          r.g.setImmediate ||
          function (e) {
            b(e);
          },
        v = {
          keepalive: 60,
          reschedulePings: !0,
          protocolId: "MQTT",
          protocolVersion: 4,
          reconnectPeriod: 1e3,
          connectTimeout: 3e4,
          clean: !0,
          resubscribe: !0,
        },
        _ = [
          "ECONNREFUSED",
          "EADDRINUSE",
          "ECONNRESET",
          "ENOTFOUND",
        ],
        w = {
          0: "",
          1: "Unacceptable protocol version",
          2: "Identifier rejected",
          3: "Server unavailable",
          4: "Bad username or password",
          5: "Not authorized",
          16: "No matching subscribers",
          17: "No subscription existed",
          128: "Unspecified error",
          129: "Malformed Packet",
          130: "Protocol Error",
          131: "Implementation specific error",
          132: "Unsupported Protocol Version",
          133: "Client Identifier not valid",
          134: "Bad User Name or Password",
          135: "Not authorized",
          136: "Server unavailable",
          137: "Server busy",
          138: "Banned",
          139: "Server shutting down",
          140: "Bad authentication method",
          141: "Keep Alive timeout",
          142: "Session taken over",
          143: "Topic Filter invalid",
          144: "Topic Name invalid",
          145: "Packet identifier in use",
          146: "Packet Identifier not found",
          147: "Receive Maximum exceeded",
          148: "Topic Alias invalid",
          149: "Packet too large",
          150: "Message rate too high",
          151: "Quota exceeded",
          152: "Administrative action",
          153: "Payload format invalid",
          154: "Retain not supported",
          155: "QoS not supported",
          156: "Use another server",
          157: "Server moved",
          158: "Shared Subscriptions not supported",
          159: "Connection rate exceeded",
          160: "Maximum connect time",
          161: "Subscription Identifiers not supported",
          162: "Wildcard Subscriptions not supported",
        };
      function S(e, t) {
        let r;
        t.properties && (r = t.properties.topicAlias);
        let n = t.topic.toString();
        if (0 === n.length) {
          if (
            void 0 === r ||
            void 0 ===
              (n = e.topicAliasSend.getTopicByAlias(r))
          )
            return Error("Unregistered Topic Alias");
          t.topic = n;
        }
        r && delete t.properties.topicAlias;
      }
      function E(e, t, r) {
        y("sendPacket :: packet: %O", t),
          y("sendPacket :: emitting `packetsend`"),
          e.emit("packetsend", t),
          y("sendPacket :: writing to stream");
        let n = u.writeToStream(t, e.stream, e.options);
        y("sendPacket :: writeToStream result %s", n),
          !n && r && r !== A
            ? (y(
                "sendPacket :: handle events on `drain` once through callback."
              ),
              e.stream.once("drain", r))
            : r && (y("sendPacket :: invoking cb"), r());
      }
      function k(e, t, r, n) {
        let i;
        y(
          "storeAndSend :: store packet with cmd %s to outgoingStore",
          t.cmd
        );
        let o = t;
        if ("publish" === o.cmd && (i = S(e, (o = p(t)))))
          return r && r(i);
        e.outgoingStore.put(o, function (i) {
          if (i) return r && r(i);
          n(), E(e, t, r);
        });
      }
      function A(e) {
        y("nop ::", e);
      }
      function I(e, t) {
        let r;
        let n = this;
        if (!(this instanceof I)) return new I(e, t);
        for (r in ((this.options = t || {}), v))
          void 0 === this.options[r]
            ? (this.options[r] = v[r])
            : (this.options[r] = t[r]);
        y("MqttClient :: options.protocol", t.protocol),
          y(
            "MqttClient :: options.protocolVersion",
            t.protocolVersion
          ),
          y("MqttClient :: options.username", t.username),
          y("MqttClient :: options.keepalive", t.keepalive),
          y(
            "MqttClient :: options.reconnectPeriod",
            t.reconnectPeriod
          ),
          y(
            "MqttClient :: options.rejectUnauthorized",
            t.rejectUnauthorized
          ),
          y(
            "MqttClient :: options.topicAliasMaximum",
            t.topicAliasMaximum
          ),
          (this.options.clientId =
            "string" == typeof t.clientId
              ? t.clientId
              : "mqttjs_" +
                Math.random().toString(16).substr(2, 8)),
          y(
            "MqttClient :: clientId",
            this.options.clientId
          ),
          (this.options.customHandleAcks =
            5 === t.protocolVersion && t.customHandleAcks
              ? t.customHandleAcks
              : function () {
                  arguments[3](0);
                }),
          (this.streamBuilder = e),
          (this.messageIdProvider =
            void 0 === this.options.messageIdProvider
              ? new l()
              : this.options.messageIdProvider),
          (this.outgoingStore = t.outgoingStore || new o()),
          (this.incomingStore = t.incomingStore || new o()),
          (this.queueQoSZero =
            void 0 === t.queueQoSZero || t.queueQoSZero),
          (this._resubscribeTopics = {}),
          (this.messageIdToTopic = {}),
          (this.pingTimer = null),
          (this.connected = !1),
          (this.disconnecting = !1),
          (this.queue = []),
          (this.connackTimer = null),
          (this.reconnectTimer = null),
          (this._storeProcessing = !1),
          (this._packetIdsDuringStoreProcessing = {}),
          (this._storeProcessingQueue = []),
          (this.outgoing = {}),
          (this._firstConnection = !0),
          t.topicAliasMaximum > 0 &&
            (t.topicAliasMaximum > 65535
              ? y(
                  "MqttClient :: options.topicAliasMaximum is out of range"
                )
              : (this.topicAliasRecv = new s(
                  t.topicAliasMaximum
                ))),
          this.on("connect", function () {
            let e = this.queue;
            y("connect :: sending queued packets"),
              (function t() {
                let r = e.shift();
                y("deliver :: entry %o", r);
                let i = null;
                if (!r) {
                  n._resubscribe();
                  return;
                }
                y(
                  "deliver :: call _sendPacket for %o",
                  (i = r.packet)
                );
                let o = !0;
                i.messageId &&
                  0 !== i.messageId &&
                  !n.messageIdProvider.register(
                    i.messageId
                  ) &&
                  (o = !1),
                  o
                    ? n._sendPacket(i, function (e) {
                        r.cb && r.cb(e), t();
                      })
                    : (y(
                        "messageId: %d has already used. The message is skipped and removed.",
                        i.messageId
                      ),
                      t());
              })();
          }),
          this.on("close", function () {
            y("close :: connected set to `false`"),
              (this.connected = !1),
              y("close :: clearing connackTimer"),
              clearTimeout(this.connackTimer),
              y("close :: clearing ping timer"),
              null !== n.pingTimer &&
                (n.pingTimer.clear(), (n.pingTimer = null)),
              this.topicAliasRecv &&
                this.topicAliasRecv.clear(),
              y("close :: calling _setupReconnect"),
              this._setupReconnect();
          }),
          i.call(this),
          y("MqttClient :: setting up stream"),
          this._setupStream();
      }
      h(I, i),
        (I.prototype._setupStream = function () {
          let e = this,
            t = new c(),
            r = u.parser(this.options),
            n = null,
            i = [];
          function o() {
            if (i.length) b(s);
            else {
              let e = n;
              (n = null), e();
            }
          }
          function s() {
            y("work :: getting next packet in queue");
            let t = i.shift();
            if (t)
              y("work :: packet pulled from queue"),
                e._handlePacket(t, o);
            else {
              y("work :: no packets in queue");
              let e = n;
              (n = null),
                y("work :: done flag is %s", !!e),
                e && e();
            }
          }
          y(
            "_setupStream :: calling method to clear reconnect"
          ),
            this._clearReconnect(),
            y(
              "_setupStream :: using streamBuilder provided to client to create stream"
            ),
            (this.stream = this.streamBuilder(this)),
            r.on("packet", function (e) {
              y(
                "parser :: on packet push to packets array."
              ),
                i.push(e);
            }),
            (t._write = function (e, t, i) {
              (n = i),
                y("writable stream :: parsing buffer"),
                r.parse(e),
                s();
            }),
            y(
              "_setupStream :: pipe stream to writable stream"
            ),
            this.stream.pipe(t),
            this.stream.on("error", function (t) {
              y("streamErrorHandler :: error", t.message),
                _.includes(t.code)
                  ? (y(
                      "streamErrorHandler :: emitting error"
                    ),
                    e.emit("error", t))
                  : A(t);
            }),
            this.stream.on("close", function () {
              var t;
              y(
                "(%s)stream :: on close",
                e.options.clientId
              ),
                (t = e.outgoing) &&
                  (y(
                    "flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"
                  ),
                  Object.keys(t).forEach(function (e) {
                    t[e].volatile &&
                      "function" == typeof t[e].cb &&
                      (t[e].cb(Error("Connection closed")),
                      delete t[e]);
                  })),
                y("stream: emit close to MqttClient"),
                e.emit("close");
            }),
            y("_setupStream: sending packet `connect`");
          let a = Object.create(this.options);
          if (
            ((a.cmd = "connect"),
            this.topicAliasRecv &&
              (a.properties || (a.properties = {}),
              this.topicAliasRecv &&
                (a.properties.topicAliasMaximum =
                  this.topicAliasRecv.max)),
            E(this, a),
            r.on("error", this.emit.bind(this, "error")),
            this.options.properties)
          ) {
            if (
              !this.options.properties
                .authenticationMethod &&
              this.options.properties.authenticationData
            )
              return (
                e.end(() =>
                  this.emit(
                    "error",
                    Error(
                      "Packet has no Authentication Method"
                    )
                  )
                ),
                this
              );
            if (
              this.options.properties
                .authenticationMethod &&
              this.options.authPacket &&
              "object" == typeof this.options.authPacket
            ) {
              let e = g(
                { cmd: "auth", reasonCode: 0 },
                this.options.authPacket
              );
              E(this, e);
            }
          }
          this.stream.setMaxListeners(1e3),
            clearTimeout(this.connackTimer),
            (this.connackTimer = setTimeout(function () {
              y(
                "!!connectTimeout hit!! Calling _cleanUp with force `true`"
              ),
                e._cleanUp(!0);
            }, this.options.connectTimeout));
        }),
        (I.prototype._handlePacket = function (e, t) {
          let r = this.options;
          if (
            5 === r.protocolVersion &&
            r.properties &&
            r.properties.maximumPacketSize &&
            r.properties.maximumPacketSize < e.length
          )
            return (
              this.emit(
                "error",
                Error("exceeding packets size " + e.cmd)
              ),
              this.end({
                reasonCode: 149,
                properties: {
                  reasonString:
                    "Maximum packet size was exceeded",
                },
              }),
              this
            );
          switch (
            (y("_handlePacket :: emitting packetreceive"),
            this.emit("packetreceive", e),
            e.cmd)
          ) {
            case "publish":
              this._handlePublish(e, t);
              break;
            case "puback":
            case "pubrec":
            case "pubcomp":
            case "suback":
            case "unsuback":
              this._handleAck(e), t();
              break;
            case "pubrel":
              this._handlePubrel(e, t);
              break;
            case "connack":
              this._handleConnack(e), t();
              break;
            case "auth":
              this._handleAuth(e), t();
              break;
            case "pingresp":
              this._handlePingresp(e), t();
              break;
            case "disconnect":
              this._handleDisconnect(e), t();
          }
        }),
        (I.prototype._checkDisconnecting = function (e) {
          return (
            this.disconnecting &&
              (e && e !== A
                ? e(Error("client disconnecting"))
                : this.emit(
                    "error",
                    Error("client disconnecting")
                  )),
            this.disconnecting
          );
        }),
        (I.prototype.publish = function (e, t, r, n) {
          y("publish :: message `%s` to topic `%s`", t, e);
          let i = this.options;
          if (
            ("function" == typeof r &&
              ((n = r), (r = null)),
            (r = g({ qos: 0, retain: !1, dup: !1 }, r)),
            this._checkDisconnecting(n))
          )
            return this;
          let o = this,
            s = function () {
              let s = 0;
              if (
                (1 === r.qos || 2 === r.qos) &&
                null === (s = o._nextId())
              )
                return y("No messageId left"), !1;
              let a = {
                cmd: "publish",
                topic: e,
                payload: t,
                qos: r.qos,
                retain: r.retain,
                messageId: s,
                dup: r.dup,
              };
              switch (
                (5 === i.protocolVersion &&
                  (a.properties = r.properties),
                y("publish :: qos", r.qos),
                r.qos)
              ) {
                case 1:
                case 2:
                  (o.outgoing[a.messageId] = {
                    volatile: !1,
                    cb: n || A,
                  }),
                    y(
                      "MqttClient:publish: packet cmd: %s",
                      a.cmd
                    ),
                    o._sendPacket(a, void 0, r.cbStorePut);
                  break;
                default:
                  y(
                    "MqttClient:publish: packet cmd: %s",
                    a.cmd
                  ),
                    o._sendPacket(a, n, r.cbStorePut);
              }
              return !0;
            };
          return (
            (this._storeProcessing ||
              this._storeProcessingQueue.length > 0 ||
              !s()) &&
              this._storeProcessingQueue.push({
                invoke: s,
                cbStorePut: r.cbStorePut,
                callback: n,
              }),
            this
          );
        }),
        (I.prototype.subscribe = function () {
          let e = this,
            t = Array(arguments.length);
          for (let e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          let r = [],
            n = t.shift(),
            i = n.resubscribe,
            o = t.pop() || A,
            s = t.pop(),
            a = this.options.protocolVersion;
          delete n.resubscribe,
            "string" == typeof n && (n = [n]),
            "function" != typeof o && ((s = o), (o = A));
          let u = d.validateTopics(n);
          if (null !== u)
            return m(o, Error("Invalid topic " + u)), this;
          if (this._checkDisconnecting(o))
            return y("subscribe: discconecting true"), this;
          let l = { qos: 0 };
          if (
            (5 === a &&
              ((l.nl = !1), (l.rap = !1), (l.rh = 0)),
            (s = g(l, s)),
            Array.isArray(n)
              ? n.forEach(function (t) {
                  if (
                    (y("subscribe: array topic %s", t),
                    !Object.prototype.hasOwnProperty.call(
                      e._resubscribeTopics,
                      t
                    ) ||
                      e._resubscribeTopics[t].qos < s.qos ||
                      i)
                  ) {
                    let e = { topic: t, qos: s.qos };
                    5 === a &&
                      ((e.nl = s.nl),
                      (e.rap = s.rap),
                      (e.rh = s.rh),
                      (e.properties = s.properties)),
                      y(
                        "subscribe: pushing topic `%s` and qos `%s` to subs list",
                        e.topic,
                        e.qos
                      ),
                      r.push(e);
                  }
                })
              : Object.keys(n).forEach(function (t) {
                  if (
                    (y("subscribe: object topic %s", t),
                    !Object.prototype.hasOwnProperty.call(
                      e._resubscribeTopics,
                      t
                    ) ||
                      e._resubscribeTopics[t].qos <
                        n[t].qos ||
                      i)
                  ) {
                    let e = { topic: t, qos: n[t].qos };
                    5 === a &&
                      ((e.nl = n[t].nl),
                      (e.rap = n[t].rap),
                      (e.rh = n[t].rh),
                      (e.properties = s.properties)),
                      y(
                        "subscribe: pushing `%s` to subs list",
                        e
                      ),
                      r.push(e);
                  }
                }),
            !r.length)
          )
            return o(null, []), this;
          let c = function () {
            let t = e._nextId();
            if (null === t)
              return y("No messageId left"), !1;
            let n = {
              cmd: "subscribe",
              subscriptions: r,
              qos: 1,
              retain: !1,
              dup: !1,
              messageId: t,
            };
            if (
              (s.properties &&
                (n.properties = s.properties),
              e.options.resubscribe)
            ) {
              y("subscribe :: resubscribe true");
              let t = [];
              r.forEach(function (r) {
                if (e.options.reconnectPeriod > 0) {
                  let n = { qos: r.qos };
                  5 === a &&
                    ((n.nl = r.nl || !1),
                    (n.rap = r.rap || !1),
                    (n.rh = r.rh || 0),
                    (n.properties = r.properties)),
                    (e._resubscribeTopics[r.topic] = n),
                    t.push(r.topic);
                }
              }),
                (e.messageIdToTopic[n.messageId] = t);
            }
            return (
              (e.outgoing[n.messageId] = {
                volatile: !0,
                cb: function (e, t) {
                  if (!e) {
                    let e = t.granted;
                    for (let t = 0; t < e.length; t += 1)
                      r[t].qos = e[t];
                  }
                  o(e, r);
                },
              }),
              y("subscribe :: call _sendPacket"),
              e._sendPacket(n),
              !0
            );
          };
          return (
            (this._storeProcessing ||
              this._storeProcessingQueue.length > 0 ||
              !c()) &&
              this._storeProcessingQueue.push({
                invoke: c,
                callback: o,
              }),
            this
          );
        }),
        (I.prototype.unsubscribe = function () {
          let e = this,
            t = Array(arguments.length);
          for (let e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          let r = t.shift(),
            n = t.pop() || A,
            i = t.pop();
          "string" == typeof r && (r = [r]),
            "function" != typeof n && ((i = n), (n = A));
          let o = d.validateTopics(r);
          if (null !== o)
            return m(n, Error("Invalid topic " + o)), this;
          if (e._checkDisconnecting(n)) return this;
          let s = function () {
            let t = e._nextId();
            if (null === t)
              return y("No messageId left"), !1;
            let o = {
              cmd: "unsubscribe",
              qos: 1,
              messageId: t,
            };
            return (
              "string" == typeof r
                ? (o.unsubscriptions = [r])
                : Array.isArray(r) &&
                  (o.unsubscriptions = r),
              e.options.resubscribe &&
                o.unsubscriptions.forEach(function (t) {
                  delete e._resubscribeTopics[t];
                }),
              "object" == typeof i &&
                i.properties &&
                (o.properties = i.properties),
              (e.outgoing[o.messageId] = {
                volatile: !0,
                cb: n,
              }),
              y("unsubscribe: call _sendPacket"),
              e._sendPacket(o),
              !0
            );
          };
          return (
            (this._storeProcessing ||
              this._storeProcessingQueue.length > 0 ||
              !s()) &&
              this._storeProcessingQueue.push({
                invoke: s,
                callback: n,
              }),
            this
          );
        }),
        (I.prototype.end = function (e, t, r) {
          let n = this;
          function i() {
            y(
              "end :: closeStores: closing incoming and outgoing stores"
            ),
              (n.disconnected = !0),
              n.incomingStore.close(function (e) {
                n.outgoingStore.close(function (t) {
                  y("end :: closeStores: emitting end"),
                    n.emit("end"),
                    r &&
                      (y(
                        "end :: closeStores: invoking callback with args"
                      ),
                      r(e || t));
                });
              }),
              n._deferredReconnect &&
                n._deferredReconnect();
          }
          function o() {
            y(
              "end :: (%s) :: finish :: calling _cleanUp with force %s",
              n.options.clientId,
              e
            ),
              n._cleanUp(
                e,
                () => {
                  y(
                    "end :: finish :: calling process.nextTick on closeStores"
                  ),
                    b(i.bind(n));
                },
                t
              );
          }
          return (y("end :: (%s)", this.options.clientId),
          (null == e || "boolean" != typeof e) &&
            ((r = t || A),
            (t = e),
            (e = !1),
            "object" != typeof t &&
              ((r = t),
              (t = null),
              "function" != typeof r && (r = A))),
          "object" != typeof t && ((r = t), (t = null)),
          y("end :: cb? %s", !!r),
          (r = r || A),
          this.disconnecting)
            ? (r(), this)
            : (this._clearReconnect(),
              (this.disconnecting = !0),
              !e && Object.keys(this.outgoing).length > 0
                ? (y(
                    "end :: (%s) :: calling finish in 10ms once outgoing is empty",
                    n.options.clientId
                  ),
                  this.once(
                    "outgoingEmpty",
                    setTimeout.bind(null, o, 10)
                  ))
                : (y(
                    "end :: (%s) :: immediately calling finish",
                    n.options.clientId
                  ),
                  o()),
              this);
        }),
        (I.prototype.removeOutgoingMessage = function (e) {
          let t = this.outgoing[e]
            ? this.outgoing[e].cb
            : null;
          return (
            delete this.outgoing[e],
            this.outgoingStore.del(
              { messageId: e },
              function () {
                t(Error("Message removed"));
              }
            ),
            this
          );
        }),
        (I.prototype.reconnect = function (e) {
          y("client reconnect");
          let t = this,
            r = function () {
              e
                ? ((t.options.incomingStore =
                    e.incomingStore),
                  (t.options.outgoingStore =
                    e.outgoingStore))
                : ((t.options.incomingStore = null),
                  (t.options.outgoingStore = null)),
                (t.incomingStore =
                  t.options.incomingStore || new o()),
                (t.outgoingStore =
                  t.options.outgoingStore || new o()),
                (t.disconnecting = !1),
                (t.disconnected = !1),
                (t._deferredReconnect = null),
                t._reconnect();
            };
          return (
            this.disconnecting && !this.disconnected
              ? (this._deferredReconnect = r)
              : r(),
            this
          );
        }),
        (I.prototype._reconnect = function () {
          y("_reconnect: emitting reconnect to client"),
            this.emit("reconnect"),
            this.connected
              ? (this.end(() => {
                  this._setupStream();
                }),
                y(
                  "client already connected. disconnecting first."
                ))
              : (y("_reconnect: calling _setupStream"),
                this._setupStream());
        }),
        (I.prototype._setupReconnect = function () {
          let e = this;
          e.disconnecting ||
          e.reconnectTimer ||
          !(e.options.reconnectPeriod > 0)
            ? y("_setupReconnect :: doing nothing...")
            : (this.reconnecting ||
                (y(
                  "_setupReconnect :: emit `offline` state"
                ),
                this.emit("offline"),
                y(
                  "_setupReconnect :: set `reconnecting` to `true`"
                ),
                (this.reconnecting = !0)),
              y(
                "_setupReconnect :: setting reconnectTimer for %d ms",
                e.options.reconnectPeriod
              ),
              (e.reconnectTimer = setInterval(function () {
                y("reconnectTimer :: reconnect triggered!"),
                  e._reconnect();
              }, e.options.reconnectPeriod)));
        }),
        (I.prototype._clearReconnect = function () {
          y("_clearReconnect : clearing reconnect timer"),
            this.reconnectTimer &&
              (clearInterval(this.reconnectTimer),
              (this.reconnectTimer = null));
        }),
        (I.prototype._cleanUp = function (e, t) {
          let r = arguments[2];
          if (
            (t &&
              (y(
                "_cleanUp :: done callback provided for on stream close"
              ),
              this.stream.on("close", t)),
            y("_cleanUp :: forced? %s", e),
            e)
          ) {
            if (
              0 === this.options.reconnectPeriod &&
              this.options.clean
            ) {
              var n;
              (n = this.outgoing) &&
                (y("flush: queue exists? %b", !!n),
                Object.keys(n).forEach(function (e) {
                  "function" == typeof n[e].cb &&
                    (n[e].cb(Error("Connection closed")),
                    delete n[e]);
                }));
            }
            y(
              "_cleanUp :: (%s) :: destroying stream",
              this.options.clientId
            ),
              this.stream.destroy();
          } else {
            let e = g({ cmd: "disconnect" }, r);
            y(
              "_cleanUp :: (%s) :: call _sendPacket with disconnect packet",
              this.options.clientId
            ),
              this._sendPacket(
                e,
                m.bind(
                  null,
                  this.stream.end.bind(this.stream)
                )
              );
          }
          this.disconnecting ||
            (y(
              "_cleanUp :: client not disconnecting. Clearing and resetting reconnect."
            ),
            this._clearReconnect(),
            this._setupReconnect()),
            null !== this.pingTimer &&
              (y("_cleanUp :: clearing pingTimer"),
              this.pingTimer.clear(),
              (this.pingTimer = null)),
            t &&
              !this.connected &&
              (y(
                "_cleanUp :: (%s) :: removing stream `done` callback `close` listener",
                this.options.clientId
              ),
              this.stream.removeListener("close", t),
              t());
        }),
        (I.prototype._sendPacket = function (e, t, r) {
          y(
            "_sendPacket :: (%s) ::  start",
            this.options.clientId
          ),
            (r = r || A),
            (t = t || A);
          let n = (function (e, t) {
            if (
              5 === e.options.protocolVersion &&
              "publish" === t.cmd
            ) {
              let r;
              t.properties && (r = t.properties.topicAlias);
              let n = t.topic.toString();
              if (e.topicAliasSend) {
                if (r) {
                  if (
                    0 !== n.length &&
                    (y(
                      "applyTopicAlias :: register topic: %s - alias: %d",
                      n,
                      r
                    ),
                    !e.topicAliasSend.put(n, r))
                  )
                    return (
                      y(
                        "applyTopicAlias :: error out of range. topic: %s - alias: %d",
                        n,
                        r
                      ),
                      Error(
                        "Sending Topic Alias out of range"
                      )
                    );
                } else
                  0 !== n.length &&
                    (e.options.autoAssignTopicAlias
                      ? (r =
                          e.topicAliasSend.getAliasByTopic(
                            n
                          ))
                        ? ((t.topic = ""),
                          (t.properties = {
                            ...t.properties,
                            topicAlias: r,
                          }),
                          y(
                            "applyTopicAlias :: auto assign(use) topic: %s - alias: %d",
                            n,
                            r
                          ))
                        : ((r =
                            e.topicAliasSend.getLruAlias()),
                          e.topicAliasSend.put(n, r),
                          (t.properties = {
                            ...t.properties,
                            topicAlias: r,
                          }),
                          y(
                            "applyTopicAlias :: auto assign topic: %s - alias: %d",
                            n,
                            r
                          ))
                      : e.options.autoUseTopicAlias &&
                        (r =
                          e.topicAliasSend.getAliasByTopic(
                            n
                          )) &&
                        ((t.topic = ""),
                        (t.properties = {
                          ...t.properties,
                          topicAlias: r,
                        }),
                        y(
                          "applyTopicAlias :: auto use topic: %s - alias: %d",
                          n,
                          r
                        )));
              } else if (r)
                return (
                  y(
                    "applyTopicAlias :: error out of range. topic: %s - alias: %d",
                    n,
                    r
                  ),
                  Error("Sending Topic Alias out of range")
                );
            }
          })(this, e);
          if (n) {
            t(n);
            return;
          }
          if (!this.connected) {
            if ("auth" === e.cmd) {
              this._shiftPingInterval(), E(this, e, t);
              return;
            }
            y(
              "_sendPacket :: client not connected. Storing packet offline."
            ),
              this._storePacket(e, t, r);
            return;
          }
          switch ((this._shiftPingInterval(), e.cmd)) {
            case "publish":
              break;
            case "pubrel":
              k(this, e, t, r);
              return;
            default:
              E(this, e, t);
              return;
          }
          switch (e.qos) {
            case 2:
            case 1:
              k(this, e, t, r);
              break;
            default:
              E(this, e, t);
          }
          y(
            "_sendPacket :: (%s) ::  end",
            this.options.clientId
          );
        }),
        (I.prototype._storePacket = function (e, t, r) {
          y("_storePacket :: packet: %o", e),
            y("_storePacket :: cb? %s", !!t),
            (r = r || A);
          let n = e;
          if ("publish" === n.cmd) {
            n = p(e);
            let r = S(this, n);
            if (r) return t && t(r);
          }
          (0 === (n.qos || 0) && this.queueQoSZero) ||
          "publish" !== n.cmd
            ? this.queue.push({ packet: n, cb: t })
            : n.qos > 0
            ? ((t = this.outgoing[n.messageId]
                ? this.outgoing[n.messageId].cb
                : null),
              this.outgoingStore.put(n, function (e) {
                if (e) return t && t(e);
                r();
              }))
            : t && t(Error("No connection to broker"));
        }),
        (I.prototype._setupPingTimer = function () {
          y(
            "_setupPingTimer :: keepalive %d (seconds)",
            this.options.keepalive
          );
          let e = this;
          !this.pingTimer &&
            this.options.keepalive &&
            ((this.pingResp = !0),
            (this.pingTimer = f(function () {
              e._checkPing();
            }, 1e3 * this.options.keepalive)));
        }),
        (I.prototype._shiftPingInterval = function () {
          this.pingTimer &&
            this.options.keepalive &&
            this.options.reschedulePings &&
            this.pingTimer.reschedule(
              1e3 * this.options.keepalive
            );
        }),
        (I.prototype._checkPing = function () {
          y("_checkPing :: checking ping..."),
            this.pingResp
              ? (y(
                  "_checkPing :: ping response received. Clearing flag and sending `pingreq`"
                ),
                (this.pingResp = !1),
                this._sendPacket({ cmd: "pingreq" }))
              : (y(
                  "_checkPing :: calling _cleanUp with force true"
                ),
                this._cleanUp(!0));
        }),
        (I.prototype._handlePingresp = function () {
          this.pingResp = !0;
        }),
        (I.prototype._handleConnack = function (e) {
          y("_handleConnack");
          let t = this.options,
            r = t.protocolVersion,
            n = 5 === r ? e.reasonCode : e.returnCode;
          if (
            (clearTimeout(this.connackTimer),
            delete this.topicAliasSend,
            e.properties)
          ) {
            if (e.properties.topicAliasMaximum) {
              if (e.properties.topicAliasMaximum > 65535) {
                this.emit(
                  "error",
                  Error(
                    "topicAliasMaximum from broker is out of range"
                  )
                );
                return;
              }
              e.properties.topicAliasMaximum > 0 &&
                (this.topicAliasSend = new a(
                  e.properties.topicAliasMaximum
                ));
            }
            e.properties.serverKeepAlive &&
              t.keepalive &&
              ((t.keepalive = e.properties.serverKeepAlive),
              this._shiftPingInterval()),
              e.properties.maximumPacketSize &&
                (t.properties || (t.properties = {}),
                (t.properties.maximumPacketSize =
                  e.properties.maximumPacketSize));
          }
          if (0 === n)
            (this.reconnecting = !1), this._onConnect(e);
          else if (n > 0) {
            let e = Error("Connection refused: " + w[n]);
            (e.code = n), this.emit("error", e);
          }
        }),
        (I.prototype._handleAuth = function (e) {
          let t = this.options,
            r = t.protocolVersion,
            n = 5 === r ? e.reasonCode : e.returnCode;
          if (5 !== r) {
            let e = Error(
              "Protocol error: Auth packets are only supported in MQTT 5. Your version:" +
                r
            );
            (e.code = n), this.emit("error", e);
            return;
          }
          let i = this;
          this.handleAuth(e, function (e, t) {
            if (e) {
              i.emit("error", e);
              return;
            }
            if (24 === n)
              (i.reconnecting = !1), i._sendPacket(t);
            else {
              let t = Error("Connection refused: " + w[n]);
              (e.code = n), i.emit("error", t);
            }
          });
        }),
        (I.prototype.handleAuth = function (e, t) {
          t();
        }),
        (I.prototype._handlePublish = function (e, t) {
          y("_handlePublish: packet %o", e),
            (t = void 0 !== t ? t : A);
          let r = e.topic.toString(),
            n = e.payload,
            i = e.qos,
            o = e.messageId,
            s = this,
            a = this.options,
            u = [0, 16, 128, 131, 135, 144, 145, 151, 153];
          if (5 === this.options.protocolVersion) {
            let t;
            if (
              (e.properties &&
                (t = e.properties.topicAlias),
              void 0 !== t)
            ) {
              if (0 === r.length) {
                if (t > 0 && t <= 65535) {
                  let e =
                    this.topicAliasRecv.getTopicByAlias(t);
                  if (e)
                    y(
                      "_handlePublish :: topic complemented by alias. topic: %s - alias: %d",
                      (r = e),
                      t
                    );
                  else {
                    y(
                      "_handlePublish :: unregistered topic alias. alias: %d",
                      t
                    ),
                      this.emit(
                        "error",
                        Error(
                          "Received unregistered Topic Alias"
                        )
                      );
                    return;
                  }
                } else {
                  y(
                    "_handlePublish :: topic alias out of range. alias: %d",
                    t
                  ),
                    this.emit(
                      "error",
                      Error(
                        "Received Topic Alias is out of range"
                      )
                    );
                  return;
                }
              } else if (this.topicAliasRecv.put(r, t))
                y(
                  "_handlePublish :: registered topic: %s - alias: %d",
                  r,
                  t
                );
              else {
                y(
                  "_handlePublish :: topic alias out of range. alias: %d",
                  t
                ),
                  this.emit(
                    "error",
                    Error(
                      "Received Topic Alias is out of range"
                    )
                  );
                return;
              }
            }
          }
          switch ((y("_handlePublish: qos %d", i), i)) {
            case 2:
              a.customHandleAcks(r, n, e, function (r, n) {
                return (r instanceof Error ||
                  ((n = r), (r = null)),
                r)
                  ? s.emit("error", r)
                  : -1 === u.indexOf(n)
                  ? s.emit(
                      "error",
                      Error("Wrong reason code for pubrec")
                    )
                  : void (n
                      ? s._sendPacket(
                          {
                            cmd: "pubrec",
                            messageId: o,
                            reasonCode: n,
                          },
                          t
                        )
                      : s.incomingStore.put(e, function () {
                          s._sendPacket(
                            { cmd: "pubrec", messageId: o },
                            t
                          );
                        }));
              });
              break;
            case 1:
              a.customHandleAcks(r, n, e, function (i, a) {
                return (i instanceof Error ||
                  ((a = i), (i = null)),
                i)
                  ? s.emit("error", i)
                  : -1 === u.indexOf(a)
                  ? s.emit(
                      "error",
                      Error("Wrong reason code for puback")
                    )
                  : void (a || s.emit("message", r, n, e),
                    s.handleMessage(e, function (e) {
                      if (e) return t && t(e);
                      s._sendPacket(
                        {
                          cmd: "puback",
                          messageId: o,
                          reasonCode: a,
                        },
                        t
                      );
                    }));
              });
              break;
            case 0:
              this.emit("message", r, n, e),
                this.handleMessage(e, t);
              break;
            default:
              y(
                "_handlePublish: unknown QoS. Doing nothing."
              );
          }
        }),
        (I.prototype.handleMessage = function (e, t) {
          t();
        }),
        (I.prototype._handleAck = function (e) {
          let t;
          let r = e.messageId,
            n = e.cmd,
            i = null,
            o = this.outgoing[r]
              ? this.outgoing[r].cb
              : null,
            s = this;
          if (!o) {
            y(
              "_handleAck :: Server sent an ack in error. Ignoring."
            );
            return;
          }
          switch ((y("_handleAck :: packet type", n), n)) {
            case "pubcomp":
            case "puback": {
              let n = e.reasonCode;
              n &&
                n > 0 &&
                16 !== n &&
                (((t = Error(
                  "Publish error: " + w[n]
                )).code = n),
                o(t, e)),
                delete this.outgoing[r],
                this.outgoingStore.del(e, o),
                this.messageIdProvider.deallocate(r),
                this._invokeStoreProcessingQueue();
              break;
            }
            case "pubrec": {
              i = { cmd: "pubrel", qos: 2, messageId: r };
              let n = e.reasonCode;
              n && n > 0 && 16 !== n
                ? (((t = Error(
                    "Publish error: " + w[n]
                  )).code = n),
                  o(t, e))
                : this._sendPacket(i);
              break;
            }
            case "suback":
              delete this.outgoing[r],
                this.messageIdProvider.deallocate(r);
              for (let t = 0; t < e.granted.length; t++)
                if ((128 & e.granted[t]) != 0) {
                  let e = this.messageIdToTopic[r];
                  e &&
                    e.forEach(function (e) {
                      delete s._resubscribeTopics[e];
                    });
                }
              this._invokeStoreProcessingQueue(),
                o(null, e);
              break;
            case "unsuback":
              delete this.outgoing[r],
                this.messageIdProvider.deallocate(r),
                this._invokeStoreProcessingQueue(),
                o(null);
              break;
            default:
              s.emit(
                "error",
                Error("unrecognized packet type")
              );
          }
          this.disconnecting &&
            0 === Object.keys(this.outgoing).length &&
            this.emit("outgoingEmpty");
        }),
        (I.prototype._handlePubrel = function (e, t) {
          y("handling pubrel packet"),
            (t = void 0 !== t ? t : A);
          let r = e.messageId,
            n = this,
            i = { cmd: "pubcomp", messageId: r };
          n.incomingStore.get(e, function (e, r) {
            e
              ? n._sendPacket(i, t)
              : (n.emit("message", r.topic, r.payload, r),
                n.handleMessage(r, function (e) {
                  if (e) return t(e);
                  n.incomingStore.del(r, A),
                    n._sendPacket(i, t);
                }));
          });
        }),
        (I.prototype._handleDisconnect = function (e) {
          this.emit("disconnect", e);
        }),
        (I.prototype._nextId = function () {
          return this.messageIdProvider.allocate();
        }),
        (I.prototype.getLastMessageId = function () {
          return this.messageIdProvider.getLastAllocated();
        }),
        (I.prototype._resubscribe = function () {
          y("_resubscribe");
          let e = Object.keys(this._resubscribeTopics);
          if (
            !this._firstConnection &&
            (this.options.clean ||
              (5 === this.options.protocolVersion &&
                !this.connackPacket.sessionPresent)) &&
            e.length > 0
          ) {
            if (this.options.resubscribe) {
              if (5 === this.options.protocolVersion) {
                y("_resubscribe: protocolVersion 5");
                for (let t = 0; t < e.length; t++) {
                  let r = {};
                  (r[e[t]] = this._resubscribeTopics[e[t]]),
                    (r.resubscribe = !0),
                    this.subscribe(r, {
                      properties: r[e[t]].properties,
                    });
                }
              } else
                (this._resubscribeTopics.resubscribe = !0),
                  this.subscribe(this._resubscribeTopics);
            } else this._resubscribeTopics = {};
          }
          this._firstConnection = !1;
        }),
        (I.prototype._onConnect = function (e) {
          if (this.disconnected) {
            this.emit("connect", e);
            return;
          }
          let t = this;
          (this.connackPacket = e),
            this.messageIdProvider.clear(),
            this._setupPingTimer(),
            (this.connected = !0),
            (function r() {
              let n = t.outgoingStore.createStream();
              function i() {
                (t._storeProcessing = !1),
                  (t._packetIdsDuringStoreProcessing = {});
              }
              function o() {
                n.destroy(),
                  (n = null),
                  t._flushStoreProcessingQueue(),
                  i();
              }
              t.once("close", o),
                n.on("error", function (e) {
                  i(),
                    t._flushStoreProcessingQueue(),
                    t.removeListener("close", o),
                    t.emit("error", e);
                }),
                n.on("end", function () {
                  let n = !0;
                  for (let e in t._packetIdsDuringStoreProcessing)
                    if (
                      !t._packetIdsDuringStoreProcessing[e]
                    ) {
                      n = !1;
                      break;
                    }
                  n
                    ? (i(),
                      t.removeListener("close", o),
                      t._invokeAllStoreProcessingQueue(),
                      t.emit("connect", e))
                    : r();
                }),
                (function e() {
                  let r;
                  if (!n) return;
                  t._storeProcessing = !0;
                  let i = n.read(1);
                  if (!i) {
                    n.once("readable", e);
                    return;
                  }
                  if (
                    t._packetIdsDuringStoreProcessing[
                      i.messageId
                    ]
                  ) {
                    e();
                    return;
                  }
                  t.disconnecting || t.reconnectTimer
                    ? n.destroy && n.destroy()
                    : ((r = t.outgoing[i.messageId]
                        ? t.outgoing[i.messageId].cb
                        : null),
                      (t.outgoing[i.messageId] = {
                        volatile: !1,
                        cb: function (t, n) {
                          r && r(t, n), e();
                        },
                      }),
                      (t._packetIdsDuringStoreProcessing[
                        i.messageId
                      ] = !0),
                      t.messageIdProvider.register(
                        i.messageId
                      )
                        ? t._sendPacket(i)
                        : y(
                            "messageId: %d has already used.",
                            i.messageId
                          ));
                })();
            })();
        }),
        (I.prototype._invokeStoreProcessingQueue =
          function () {
            if (this._storeProcessingQueue.length > 0) {
              let e = this._storeProcessingQueue[0];
              if (e && e.invoke())
                return (
                  this._storeProcessingQueue.shift(), !0
                );
            }
            return !1;
          }),
        (I.prototype._invokeAllStoreProcessingQueue =
          function () {
            for (; this._invokeStoreProcessingQueue(); );
          }),
        (I.prototype._flushStoreProcessingQueue =
          function () {
            for (let e of this._storeProcessingQueue)
              e.cbStorePut &&
                e.cbStorePut(Error("Connection closed")),
                e.callback &&
                  e.callback(Error("Connection closed"));
            this._storeProcessingQueue.splice(0);
          }),
        (e.exports = I);
    },
    8331: function (e, t, r) {
      "use strict";
      let n, i, o;
      let { Buffer: s } = r(1620),
        a = r(3745).Transform,
        u = r(8742),
        l = !1;
      e.exports = function (e, t) {
        var r;
        if (
          ((t.hostname = t.hostname || t.host), !t.hostname)
        )
          throw Error(
            "Could not determine host. Specify host manually."
          );
        let c =
          "MQIsdp" === t.protocolId &&
          3 === t.protocolVersion
            ? "mqttv3.1"
            : "mqtt";
        (r = t).hostname || (r.hostname = "localhost"),
          r.path || (r.path = "/"),
          r.wsOptions || (r.wsOptions = {});
        let h = (function (e, t) {
          let r = "alis" === e.protocol ? "wss" : "ws",
            n = r + "://" + e.hostname + e.path;
          return (
            e.port &&
              80 !== e.port &&
              443 !== e.port &&
              (n =
                r +
                "://" +
                e.hostname +
                ":" +
                e.port +
                e.path),
            "function" == typeof e.transformWsUrl &&
              (n = e.transformWsUrl(n, e, t)),
            n
          );
        })(t, e);
        return (
          (n = t.my).connectSocket({
            url: h,
            protocols: c,
          }),
          (i = (function () {
            let e = new a();
            return (
              (e._write = function (e, t, r) {
                n.sendSocketMessage({
                  data: e.buffer,
                  success: function () {
                    r();
                  },
                  fail: function () {
                    r(Error());
                  },
                });
              }),
              (e._flush = function (e) {
                n.closeSocket({
                  success: function () {
                    e();
                  },
                });
              }),
              e
            );
          })()),
          (o = u.obj()),
          l ||
            ((l = !0),
            n.onSocketOpen(function () {
              o.setReadable(i),
                o.setWritable(i),
                o.emit("connect");
            }),
            n.onSocketMessage(function (e) {
              if ("string" == typeof e.data) {
                let t = s.from(e.data, "base64");
                i.push(t);
              } else {
                let t = new FileReader();
                t.addEventListener("load", function () {
                  let e = t.result;
                  (e =
                    e instanceof ArrayBuffer
                      ? s.from(e)
                      : s.from(e, "utf8")),
                    i.push(e);
                }),
                  t.readAsArrayBuffer(e.data);
              }
            }),
            n.onSocketClose(function () {
              o.end(), o.destroy();
            }),
            n.onSocketError(function (e) {
              o.destroy(e);
            })),
          o
        );
      };
    },
    8083: function (e, t, r) {
      "use strict";
      var n = r(4010);
      let i = r(806),
        o = r(7855),
        s = r(6633),
        a = r(6192),
        u = r(7820)("mqttjs"),
        l = {};
      function c(e, t) {
        var r;
        let n;
        if (
          (u("connecting to an MQTT broker..."),
          "object" != typeof e ||
            t ||
            ((t = e), (e = null)),
          (t = t || {}),
          e)
        ) {
          let r = s.parse(e, !0);
          if (
            (null != r.port && (r.port = Number(r.port)),
            null === (t = a(r, t)).protocol)
          )
            throw Error("Missing protocol");
          t.protocol = t.protocol.replace(/:$/, "");
        }
        if (
          ((r = t).auth &&
            ((n = r.auth.match(/^(.+):(.+)$/))
              ? ((r.username = n[1]), (r.password = n[2]))
              : (r.username = r.auth)),
          t.query &&
            "string" == typeof t.query.clientId &&
            (t.clientId = t.query.clientId),
          t.cert && t.key)
        ) {
          if (t.protocol) {
            if (
              -1 ===
              ["mqtts", "wss", "wxs", "alis"].indexOf(
                t.protocol
              )
            )
              switch (t.protocol) {
                case "mqtt":
                  t.protocol = "mqtts";
                  break;
                case "ws":
                  t.protocol = "wss";
                  break;
                case "wx":
                  t.protocol = "wxs";
                  break;
                case "ali":
                  t.protocol = "alis";
                  break;
                default:
                  throw Error(
                    'Unknown protocol for secure connection: "' +
                      t.protocol +
                      '"!'
                  );
              }
          } else throw Error("Missing secure protocol key");
        }
        if (!l[t.protocol]) {
          let e =
            -1 !== ["mqtts", "wss"].indexOf(t.protocol);
          t.protocol = [
            "mqtt",
            "mqtts",
            "ws",
            "wss",
            "wx",
            "wxs",
            "ali",
            "alis",
          ].filter(function (t, r) {
            return (
              (!e || r % 2 != 0) &&
              "function" == typeof l[t]
            );
          })[0];
        }
        if (!1 === t.clean && !t.clientId)
          throw Error(
            "Missing clientId for unclean clients"
          );
        t.protocol && (t.defaultProtocol = t.protocol);
        let o = new i(function (e) {
          return (
            t.servers &&
              ((e._reconnectCount &&
                e._reconnectCount !== t.servers.length) ||
                (e._reconnectCount = 0),
              (t.host = t.servers[e._reconnectCount].host),
              (t.port = t.servers[e._reconnectCount].port),
              (t.protocol = t.servers[e._reconnectCount]
                .protocol
                ? t.servers[e._reconnectCount].protocol
                : t.defaultProtocol),
              (t.hostname = t.host),
              e._reconnectCount++),
            u("calling streambuilder for", t.protocol),
            l[t.protocol](e, t)
          );
        }, t);
        return o.on("error", function () {}), o;
      }
      (void 0 !== n && "browser" !== n.title) ||
      "function" != typeof r
        ? ((l.mqtt = r(7536)),
          (l.tcp = r(7536)),
          (l.ssl = r(7204)),
          (l.tls = r(7204)),
          (l.mqtts = r(7204)))
        : ((l.wx = r(7622)),
          (l.wxs = r(7622)),
          (l.ali = r(8331)),
          (l.alis = r(8331))),
        (l.ws = r(3384)),
        (l.wss = r(3384)),
        (e.exports = c),
        (e.exports.connect = c),
        (e.exports.MqttClient = i),
        (e.exports.Store = o);
    },
    7536: function (e, t, r) {
      "use strict";
      let n = r(5842),
        i = r(7820)("mqttjs:tcp");
      e.exports = function (e, t) {
        (t.port = t.port || 1883),
          (t.hostname =
            t.hostname || t.host || "localhost");
        let r = t.port,
          o = t.hostname;
        return (
          i("port %d and host %s", r, o),
          n.createConnection(r, o)
        );
      };
    },
    7204: function (e, t, r) {
      "use strict";
      let n = r(5019),
        i = r(5842),
        o = r(7820)("mqttjs:tls");
      e.exports = function (e, t) {
        (t.port = t.port || 8883),
          (t.host = t.hostname || t.host || "localhost"),
          0 === i.isIP(t.host) && (t.servername = t.host),
          (t.rejectUnauthorized =
            !1 !== t.rejectUnauthorized),
          delete t.path,
          o(
            "port %d host %s rejectUnauthorized %b",
            t.port,
            t.host,
            t.rejectUnauthorized
          );
        let r = n.connect(t);
        function s(n) {
          t.rejectUnauthorized && e.emit("error", n),
            r.end();
        }
        return (
          r.on("secureConnect", function () {
            t.rejectUnauthorized && !r.authorized
              ? r.emit("error", Error("TLS not authorized"))
              : r.removeListener("error", s);
          }),
          r.on("error", s),
          r
        );
      };
    },
    3384: function (e, t, r) {
      "use strict";
      var n = r(4010);
      let { Buffer: i } = r(1620),
        o = r(5783),
        s = r(7820)("mqttjs:ws"),
        a = r(8742),
        u = r(3745).Transform,
        l = [
          "rejectUnauthorized",
          "ca",
          "cert",
          "key",
          "pfx",
          "passphrase",
        ],
        c =
          (void 0 !== n && "browser" === n.title) ||
          "function" == typeof r;
      function h(e, t) {
        let r =
          e.protocol +
          "://" +
          e.hostname +
          ":" +
          e.port +
          e.path;
        return (
          "function" == typeof e.transformWsUrl &&
            (r = e.transformWsUrl(r, e, t)),
          r
        );
      }
      function f(e) {
        let t = e;
        return (
          e.hostname || (t.hostname = "localhost"),
          e.port ||
            ("wss" === e.protocol
              ? (t.port = 443)
              : (t.port = 80)),
          e.path || (t.path = "/"),
          e.wsOptions || (t.wsOptions = {}),
          c ||
            "wss" !== e.protocol ||
            l.forEach(function (r) {
              Object.prototype.hasOwnProperty.call(e, r) &&
                !Object.prototype.hasOwnProperty.call(
                  e.wsOptions,
                  r
                ) &&
                (t.wsOptions[r] = e[r]);
            }),
          t
        );
      }
      c
        ? (e.exports = function (e, t) {
            let r;
            s("browserStreamBuilder");
            let n = (function (e) {
                let t = f(e);
                if (
                  (t.hostname || (t.hostname = t.host),
                  !t.hostname)
                ) {
                  if ("undefined" == typeof document)
                    throw Error(
                      "Could not determine host. Specify host manually."
                    );
                  let e = new URL(document.URL);
                  (t.hostname = e.hostname),
                    t.port || (t.port = e.port);
                }
                return (
                  void 0 === t.objectMode &&
                    (t.objectMode = !(
                      !0 === t.binary || void 0 === t.binary
                    )),
                  t
                );
              })(t),
              o = n.browserBufferSize || 524288,
              l = t.browserBufferTimeout || 1e3,
              c = !t.objectMode,
              p = (function (e, t) {
                let r =
                    "MQIsdp" === t.protocolId &&
                    3 === t.protocolVersion
                      ? "mqttv3.1"
                      : "mqtt",
                  n = h(t, e),
                  i = new WebSocket(n, [r]);
                return (i.binaryType = "arraybuffer"), i;
              })(e, t),
              d = (function (e, t, r) {
                let n = new u({
                  objectModeMode: e.objectMode,
                });
                return (n._write = t), (n._flush = r), n;
              })(
                t,
                function e(t, r, n) {
                  p.bufferedAmount > o &&
                    setTimeout(e, l, t, r, n),
                    c &&
                      "string" == typeof t &&
                      (t = i.from(t, "utf8"));
                  try {
                    p.send(t);
                  } catch (e) {
                    return n(e);
                  }
                  n();
                },
                function (e) {
                  p.close(), e();
                }
              );
            t.objectMode || (d._writev = _),
              d.on("close", () => {
                p.close();
              });
            let g = void 0 !== p.addEventListener;
            function y() {
              r.setReadable(d),
                r.setWritable(d),
                r.emit("connect");
            }
            function b() {
              r.end(), r.destroy();
            }
            function m(e) {
              r.destroy(e);
            }
            function v(e) {
              let t = e.data;
              (t =
                t instanceof ArrayBuffer
                  ? i.from(t)
                  : i.from(t, "utf8")),
                d.push(t);
            }
            function _(e, t) {
              let r = Array(e.length);
              for (let t = 0; t < e.length; t++)
                "string" == typeof e[t].chunk
                  ? (r[t] = i.from(e[t], "utf8"))
                  : (r[t] = e[t].chunk);
              this._write(i.concat(r), "binary", t);
            }
            return (
              p.readyState === p.OPEN
                ? (r = d)
                : ((r = r = a(void 0, void 0, t)),
                  t.objectMode || (r._writev = _),
                  g
                    ? p.addEventListener("open", y)
                    : (p.onopen = y)),
              (r.socket = p),
              g
                ? (p.addEventListener("close", b),
                  p.addEventListener("error", m),
                  p.addEventListener("message", v))
                : ((p.onclose = b),
                  (p.onerror = m),
                  (p.onmessage = v)),
              r
            );
          })
        : (e.exports = function (e, t) {
            s("streamBuilder");
            let r = f(t),
              n = h(r, e),
              i = (function (e, t, r) {
                s("createWebSocket"),
                  s(
                    "protocol: " +
                      r.protocolId +
                      " " +
                      r.protocolVersion
                  );
                let n =
                  "MQIsdp" === r.protocolId &&
                  3 === r.protocolVersion
                    ? "mqttv3.1"
                    : "mqtt";
                s(
                  "creating new Websocket for url: " +
                    t +
                    " and protocol: " +
                    n
                );
                let i = new o(t, [n], r.wsOptions);
                return i;
              })(0, n, r),
              a = o.createWebSocketStream(i, r.wsOptions);
            return (
              (a.url = n),
              i.on("close", () => {
                a.destroy();
              }),
              a
            );
          });
    },
    7622: function (e, t, r) {
      "use strict";
      let n, i, o;
      let { Buffer: s } = r(1620),
        a = r(3745).Transform,
        u = r(8742);
      e.exports = function (e, t) {
        var r;
        if (
          ((t.hostname = t.hostname || t.host), !t.hostname)
        )
          throw Error(
            "Could not determine host. Specify host manually."
          );
        let l =
          "MQIsdp" === t.protocolId &&
          3 === t.protocolVersion
            ? "mqttv3.1"
            : "mqtt";
        (r = t).hostname || (r.hostname = "localhost"),
          r.path || (r.path = "/"),
          r.wsOptions || (r.wsOptions = {});
        let c = (function (e, t) {
          let r = "wxs" === e.protocol ? "wss" : "ws",
            n = r + "://" + e.hostname + e.path;
          return (
            e.port &&
              80 !== e.port &&
              443 !== e.port &&
              (n =
                r +
                "://" +
                e.hostname +
                ":" +
                e.port +
                e.path),
            "function" == typeof e.transformWsUrl &&
              (n = e.transformWsUrl(n, e, t)),
            n
          );
        })(t, e);
        (n = wx.connectSocket({ url: c, protocols: [l] })),
          (i = (function () {
            let e = new a();
            return (
              (e._write = function (e, t, r) {
                n.send({
                  data: e.buffer,
                  success: function () {
                    r();
                  },
                  fail: function (e) {
                    r(Error(e));
                  },
                });
              }),
              (e._flush = function (e) {
                n.close({
                  success: function () {
                    e();
                  },
                });
              }),
              e
            );
          })()),
          ((o = u.obj())._destroy = function (e, t) {
            n.close({
              success: function () {
                t && t(e);
              },
            });
          });
        let h = o.destroy;
        return (
          (o.destroy = function () {
            o.destroy = h;
            let e = this;
            setTimeout(function () {
              n.close({
                fail: function () {
                  e._destroy(Error());
                },
              });
            }, 0);
          }.bind(o)),
          n.onOpen(function () {
            o.setReadable(i),
              o.setWritable(i),
              o.emit("connect");
          }),
          n.onMessage(function (e) {
            let t = e.data;
            (t =
              t instanceof ArrayBuffer
                ? s.from(t)
                : s.from(t, "utf8")),
              i.push(t);
          }),
          n.onClose(function () {
            o.end(), o.destroy();
          }),
          n.onError(function (e) {
            o.destroy(Error(e.errMsg));
          }),
          o
        );
      };
    },
    5539: function (e) {
      "use strict";
      function t() {
        if (!(this instanceof t)) return new t();
        this.nextId = Math.max(
          1,
          Math.floor(65535 * Math.random())
        );
      }
      (t.prototype.allocate = function () {
        let e = this.nextId++;
        return (
          65536 === this.nextId && (this.nextId = 1), e
        );
      }),
        (t.prototype.getLastAllocated = function () {
          return 1 === this.nextId
            ? 65535
            : this.nextId - 1;
        }),
        (t.prototype.register = function (e) {
          return !0;
        }),
        (t.prototype.deallocate = function (e) {}),
        (t.prototype.clear = function () {}),
        (e.exports = t);
    },
    7855: function (e, t, r) {
      "use strict";
      let n = r(6192),
        i = r(3745).Readable,
        o = { objectMode: !0 },
        s = { clean: !0 };
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        (this.options = e || {}),
          (this.options = n(s, e)),
          (this._inflights = new Map());
      }
      (a.prototype.put = function (e, t) {
        return (
          this._inflights.set(e.messageId, e),
          t && t(),
          this
        );
      }),
        (a.prototype.createStream = function () {
          let e = new i(o),
            t = [],
            r = !1,
            n = 0;
          return (
            this._inflights.forEach(function (e, r) {
              t.push(e);
            }),
            (e._read = function () {
              !r && n < t.length
                ? this.push(t[n++])
                : this.push(null);
            }),
            (e.destroy = function () {
              if (r) return;
              let e = this;
              (r = !0),
                setTimeout(function () {
                  e.emit("close");
                }, 0);
            }),
            e
          );
        }),
        (a.prototype.del = function (e, t) {
          return (
            (e = this._inflights.get(e.messageId))
              ? (this._inflights.delete(e.messageId),
                t(null, e))
              : t && t(Error("missing packet")),
            this
          );
        }),
        (a.prototype.get = function (e, t) {
          return (
            (e = this._inflights.get(e.messageId))
              ? t(null, e)
              : t && t(Error("missing packet")),
            this
          );
        }),
        (a.prototype.close = function (e) {
          this.options.clean && (this._inflights = null),
            e && e();
        }),
        (e.exports = a);
    },
    8279: function (e) {
      "use strict";
      function t(e) {
        if (!(this instanceof t)) return new t(e);
        (this.aliasToTopic = {}), (this.max = e);
      }
      (t.prototype.put = function (e, t) {
        return (
          0 !== t &&
          !(t > this.max) &&
          ((this.aliasToTopic[t] = e),
          (this.length = Object.keys(
            this.aliasToTopic
          ).length),
          !0)
        );
      }),
        (t.prototype.getTopicByAlias = function (e) {
          return this.aliasToTopic[e];
        }),
        (t.prototype.clear = function () {
          this.aliasToTopic = {};
        }),
        (e.exports = t);
    },
    2865: function (e, t, r) {
      "use strict";
      let n = r(8968),
        i = r(8).Q;
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        e > 0 &&
          ((this.aliasToTopic = new n({ max: e })),
          (this.topicToAlias = {}),
          (this.numberAllocator = new i(1, e)),
          (this.max = e),
          (this.length = 0));
      }
      (o.prototype.put = function (e, t) {
        if (0 === t || t > this.max) return !1;
        let r = this.aliasToTopic.get(t);
        return (
          r && delete this.topicToAlias[r],
          this.aliasToTopic.set(t, e),
          (this.topicToAlias[e] = t),
          this.numberAllocator.use(t),
          (this.length = this.aliasToTopic.length),
          !0
        );
      }),
        (o.prototype.getTopicByAlias = function (e) {
          return this.aliasToTopic.get(e);
        }),
        (o.prototype.getAliasByTopic = function (e) {
          let t = this.topicToAlias[e];
          return (
            void 0 !== t && this.aliasToTopic.get(t), t
          );
        }),
        (o.prototype.clear = function () {
          this.aliasToTopic.reset(),
            (this.topicToAlias = {}),
            this.numberAllocator.clear(),
            (this.length = 0);
        }),
        (o.prototype.getLruAlias = function () {
          let e = this.numberAllocator.firstVacant();
          return (
            e ||
            this.aliasToTopic.keys()[
              this.aliasToTopic.length - 1
            ]
          );
        }),
        (e.exports = o);
    },
    9126: function (e) {
      "use strict";
      e.exports = {
        validateTopics: function (e) {
          if (0 === e.length) return "empty_topic_list";
          for (let t = 0; t < e.length; t++)
            if (
              !(function (e) {
                let t = e.split("/");
                for (let e = 0; e < t.length; e++)
                  if ("+" !== t[e]) {
                    if ("#" === t[e])
                      return e === t.length - 1;
                    if (
                      -1 !== t[e].indexOf("+") ||
                      -1 !== t[e].indexOf("#")
                    )
                      return !1;
                  }
                return !0;
              })(e[t])
            )
              return e[t];
          return null;
        },
      };
    },
    4610: function (e) {
      function t(e, t, r, n) {
        return (
          Math.round(e / r) +
          " " +
          n +
          (t >= 1.5 * r ? "s" : "")
        );
      }
      e.exports = function (e, r) {
        r = r || {};
        var n,
          i,
          o = typeof e;
        if ("string" === o && e.length > 0)
          return (function (e) {
            if (!((e = String(e)).length > 100)) {
              var t =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  e
                );
              if (t) {
                var r = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * r;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * r;
                  case "days":
                  case "day":
                  case "d":
                    return 864e5 * r;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return 36e5 * r;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return 6e4 * r;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return 1e3 * r;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return r;
                  default:
                    return;
                }
              }
            }
          })(e);
        if ("number" === o && isFinite(e))
          return r.long
            ? (n = Math.abs(e)) >= 864e5
              ? t(e, n, 864e5, "day")
              : n >= 36e5
              ? t(e, n, 36e5, "hour")
              : n >= 6e4
              ? t(e, n, 6e4, "minute")
              : n >= 1e3
              ? t(e, n, 1e3, "second")
              : e + " ms"
            : (i = Math.abs(e)) >= 864e5
            ? Math.round(e / 864e5) + "d"
            : i >= 36e5
            ? Math.round(e / 36e5) + "h"
            : i >= 6e4
            ? Math.round(e / 6e4) + "m"
            : i >= 1e3
            ? Math.round(e / 1e3) + "s"
            : e + "ms";
        throw Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    4010: function (e, t, r) {
      "use strict";
      var n, i;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" ==
          typeof (null == (i = r.g.process)
            ? void 0
            : i.env)
          ? r.g.process
          : r(6728);
    },
    6633: function (e, t, r) {
      !(function () {
        var t = {
            477: function (e) {
              "use strict";
              e.exports = r(5572);
            },
          },
          n = {};
        function i(e) {
          var r = n[e];
          if (void 0 !== r) return r.exports;
          var o = (n[e] = { exports: {} }),
            s = !0;
          try {
            t[e](o, o.exports, i), (s = !1);
          } finally {
            s && delete n[e];
          }
          return o.exports;
        }
        i.ab = "//";
        var o = {};
        !(function () {
          var e,
            t = o,
            r =
              (e = i(477)) &&
              "object" == typeof e &&
              "default" in e
                ? e.default
                : e,
            n = /https?|ftp|gopher|file/;
          function s(e) {
            "string" == typeof e && (e = m(e));
            var t,
              i,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f =
                ((i = (t = e).auth),
                (o = t.hostname),
                (s = t.protocol || ""),
                (a = t.pathname || ""),
                (u = t.hash || ""),
                (l = t.query || ""),
                (c = !1),
                (i = i
                  ? encodeURIComponent(i).replace(
                      /%3A/i,
                      ":"
                    ) + "@"
                  : ""),
                t.host
                  ? (c = i + t.host)
                  : o &&
                    ((c =
                      i +
                      (~o.indexOf(":")
                        ? "[" + o + "]"
                        : o)),
                    t.port && (c += ":" + t.port)),
                l &&
                  "object" == typeof l &&
                  (l = r.encode(l)),
                (h = t.search || (l && "?" + l) || ""),
                s && ":" !== s.substr(-1) && (s += ":"),
                t.slashes || ((!s || n.test(s)) && !1 !== c)
                  ? ((c = "//" + (c || "")),
                    a && "/" !== a[0] && (a = "/" + a))
                  : c || (c = ""),
                u && "#" !== u[0] && (u = "#" + u),
                h && "?" !== h[0] && (h = "?" + h),
                {
                  protocol: s,
                  host: c,
                  pathname: (a = a.replace(
                    /[?#]/g,
                    encodeURIComponent
                  )),
                  search: (h = h.replace("#", "%23")),
                  hash: u,
                });
            return (
              "" +
              f.protocol +
              f.host +
              f.pathname +
              f.search +
              f.hash
            );
          }
          var a = "http://",
            u = a + "w.w",
            l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
            c = /https?|ftp|gopher|file/;
          function h(e, t) {
            var r = "string" == typeof e ? m(e) : e;
            e = "object" == typeof e ? s(e) : e;
            var n = m(t),
              i = "";
            r.protocol &&
              !r.slashes &&
              ((i = r.protocol),
              (e = e.replace(r.protocol, "")),
              (i +=
                "/" === t[0] || "/" === e[0] ? "/" : "")),
              i &&
                n.protocol &&
                ((i = ""),
                n.slashes ||
                  ((i = n.protocol),
                  (t = t.replace(n.protocol, ""))));
            var o = e.match(l);
            o &&
              !n.protocol &&
              ((e = e.substr(
                (i = o[1] + (o[2] || "")).length
              )),
              /^\/\/[^/]/.test(t) && (i = i.slice(0, -1)));
            var h = new URL(e, u + "/"),
              f = new URL(t, h).toString().replace(u, ""),
              p = n.protocol || r.protocol;
            return (
              (p += r.slashes || n.slashes ? "//" : ""),
              !i && p
                ? (f = f.replace(a, p))
                : i && (f = f.replace(a, "")),
              c.test(f) ||
                ~t.indexOf(".") ||
                "/" === e.slice(-1) ||
                "/" === t.slice(-1) ||
                "/" !== f.slice(-1) ||
                (f = f.slice(0, -1)),
              i &&
                (f = i + ("/" === f[0] ? f.substr(1) : f)),
              f
            );
          }
          function f() {}
          (f.prototype.parse = m),
            (f.prototype.format = s),
            (f.prototype.resolve = h),
            (f.prototype.resolveObject = h);
          var p = /^https?|ftp|gopher|file/,
            d = /^(.*?)([#?].*)/,
            g = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
            y = /^([a-z0-9.+-]*:)?\/\/\/*/i,
            b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
          function m(e, t, n) {
            if (
              (void 0 === t && (t = !1),
              void 0 === n && (n = !1),
              e && "object" == typeof e && e instanceof f)
            )
              return e;
            var i = (e = e.trim()).match(d);
            (e = i
              ? i[1].replace(/\\/g, "/") + i[2]
              : e.replace(/\\/g, "/")),
              b.test(e) &&
                "/" !== e.slice(-1) &&
                (e += "/");
            var o = !/(^javascript)/.test(e) && e.match(g),
              a = y.test(e),
              l = "";
            o &&
              (p.test(o[1]) ||
                ((l = o[1].toLowerCase()),
                (e = "" + o[2] + o[3])),
              o[2] ||
                ((a = !1),
                p.test(o[1])
                  ? ((l = o[1]), (e = "" + o[3]))
                  : (e = "//" + o[3])),
              (3 !== o[2].length && 1 !== o[2].length) ||
                ((l = o[1]), (e = "/" + o[3])));
            var c,
              h = (i ? i[1] : e).match(
                /^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/
              ),
              m = h && h[1],
              v = new f(),
              _ = "",
              w = "";
            try {
              c = new URL(e);
            } catch (t) {
              (_ = t),
                l ||
                  n ||
                  !/^\/\//.test(e) ||
                  /^\/\/.+[@.]/.test(e) ||
                  ((w = "/"), (e = e.substr(1)));
              try {
                c = new URL(e, u);
              } catch (e) {
                return (v.protocol = l), (v.href = l), v;
              }
            }
            (v.slashes = a && !w),
              (v.host = "w.w" === c.host ? "" : c.host),
              (v.hostname =
                "w.w" === c.hostname
                  ? ""
                  : c.hostname.replace(/(\[|\])/g, "")),
              (v.protocol = _ ? l || null : c.protocol),
              (v.search = c.search.replace(/\\/g, "%5C")),
              (v.hash = c.hash.replace(/\\/g, "%5C"));
            var S = e.split("#");
            !v.search &&
              ~S[0].indexOf("?") &&
              (v.search = "?"),
              v.hash || "" !== S[1] || (v.hash = "#"),
              (v.query = t
                ? r.decode(c.search.substr(1))
                : v.search.substr(1)),
              (v.pathname =
                w +
                (o
                  ? c.pathname
                      .replace(/['^|`]/g, function (e) {
                        return (
                          "%" +
                          e
                            .charCodeAt()
                            .toString(16)
                            .toUpperCase()
                        );
                      })
                      .replace(
                        /((?:%[0-9A-F]{2})+)/g,
                        function (e, t) {
                          try {
                            return decodeURIComponent(t)
                              .split("")
                              .map(function (e) {
                                var t = e.charCodeAt();
                                return t > 256 ||
                                  /^[a-z0-9]$/i.test(e)
                                  ? e
                                  : "%" +
                                      t
                                        .toString(16)
                                        .toUpperCase();
                              })
                              .join("");
                          } catch (e) {
                            return t;
                          }
                        }
                      )
                  : c.pathname)),
              "about:" === v.protocol &&
                "blank" === v.pathname &&
                ((v.protocol = ""), (v.pathname = "")),
              _ &&
                "/" !== e[0] &&
                (v.pathname = v.pathname.substr(1)),
              l &&
                !p.test(l) &&
                "/" !== e.slice(-1) &&
                "/" === v.pathname &&
                (v.pathname = ""),
              (v.path = v.pathname + v.search),
              (v.auth = [c.username, c.password]
                .map(decodeURIComponent)
                .filter(Boolean)
                .join(":")),
              (v.port = c.port),
              m &&
                !v.host.endsWith(m) &&
                ((v.host += m), (v.port = m.slice(1))),
              (v.href = w
                ? "" + v.pathname + v.search + v.hash
                : s(v));
            var E = /^(file)/.test(v.href)
              ? ["host", "hostname"]
              : [];
            return (
              Object.keys(v).forEach(function (e) {
                ~E.indexOf(e) || (v[e] = v[e] || null);
              }),
              v
            );
          }
          (t.parse = m),
            (t.format = s),
            (t.resolve = h),
            (t.resolveObject = function (e, t) {
              return m(h(e, t));
            }),
            (t.Url = f);
        })(),
          (e.exports = o);
      })();
    },
    6728: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                i = (e.exports = {});
              function o() {
                throw Error(
                  "setTimeout has not been defined"
                );
              }
              function s() {
                throw Error(
                  "clearTimeout has not been defined"
                );
              }
              function a(e) {
                if (t === setTimeout)
                  return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t =
                    "function" == typeof setTimeout
                      ? setTimeout
                      : o;
                } catch (e) {
                  t = o;
                }
                try {
                  r =
                    "function" == typeof clearTimeout
                      ? clearTimeout
                      : s;
                } catch (e) {
                  r = s;
                }
              })();
              var u = [],
                l = !1,
                c = -1;
              function h() {
                l &&
                  n &&
                  ((l = !1),
                  n.length ? (u = n.concat(u)) : (c = -1),
                  u.length && f());
              }
              function f() {
                if (!l) {
                  var e = a(h);
                  l = !0;
                  for (var t = u.length; t; ) {
                    for (n = u, u = []; ++c < t; )
                      n && n[c].run();
                    (c = -1), (t = u.length);
                  }
                  (n = null),
                    (l = !1),
                    (function (e) {
                      if (r === clearTimeout)
                        return clearTimeout(e);
                      if ((r === s || !r) && clearTimeout)
                        return (
                          (r = clearTimeout),
                          clearTimeout(e)
                        );
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, t) {
                (this.fun = e), (this.array = t);
              }
              function d() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                u.push(new p(e, t)),
                  1 !== u.length || l || a(f);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = d),
                (i.addListener = d),
                (i.once = d),
                (i.off = d),
                (i.removeListener = d),
                (i.removeAllListeners = d),
                (i.emit = d),
                (i.prependListener = d),
                (i.prependOnceListener = d),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error(
                    "process.binding is not supported"
                  );
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error(
                    "process.chdir is not supported"
                  );
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var i = r[e];
          if (void 0 !== i) return i.exports;
          var o = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](o, o.exports, n), (s = !1);
          } finally {
            s && delete r[e];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(229);
        e.exports = i;
      })();
    },
    5572: function (e) {
      !(function () {
        "use strict";
        var t,
          r = {
            815: function (e) {
              e.exports = function (e, r, n, i) {
                (r = r || "&"), (n = n || "=");
                var o = {};
                if ("string" != typeof e || 0 === e.length)
                  return o;
                var s = /\+/g;
                e = e.split(r);
                var a = 1e3;
                i &&
                  "number" == typeof i.maxKeys &&
                  (a = i.maxKeys);
                var u = e.length;
                a > 0 && u > a && (u = a);
                for (var l = 0; l < u; ++l) {
                  var c,
                    h,
                    f,
                    p,
                    d = e[l].replace(s, "%20"),
                    g = d.indexOf(n);
                  (g >= 0
                    ? ((c = d.substr(0, g)),
                      (h = d.substr(g + 1)))
                    : ((c = d), (h = "")),
                  (f = decodeURIComponent(c)),
                  (p = decodeURIComponent(h)),
                  Object.prototype.hasOwnProperty.call(
                    o,
                    f
                  ))
                    ? t(o[f])
                      ? o[f].push(p)
                      : (o[f] = [o[f], p])
                    : (o[f] = p);
                }
                return o;
              };
              var t =
                Array.isArray ||
                function (e) {
                  return (
                    "[object Array]" ===
                    Object.prototype.toString.call(e)
                  );
                };
            },
            577: function (e) {
              var t = function (e) {
                switch (typeof e) {
                  case "string":
                    return e;
                  case "boolean":
                    return e ? "true" : "false";
                  case "number":
                    return isFinite(e) ? e : "";
                  default:
                    return "";
                }
              };
              e.exports = function (e, o, s, a) {
                return ((o = o || "&"),
                (s = s || "="),
                null === e && (e = void 0),
                "object" == typeof e)
                  ? n(i(e), function (i) {
                      var a = encodeURIComponent(t(i)) + s;
                      return r(e[i])
                        ? n(e[i], function (e) {
                            return (
                              a + encodeURIComponent(t(e))
                            );
                          }).join(o)
                        : a + encodeURIComponent(t(e[i]));
                    }).join(o)
                  : a
                  ? encodeURIComponent(t(a)) +
                    s +
                    encodeURIComponent(t(e))
                  : "";
              };
              var r =
                Array.isArray ||
                function (e) {
                  return (
                    "[object Array]" ===
                    Object.prototype.toString.call(e)
                  );
                };
              function n(e, t) {
                if (e.map) return e.map(t);
                for (var r = [], n = 0; n < e.length; n++)
                  r.push(t(e[n], n));
                return r;
              }
              var i =
                Object.keys ||
                function (e) {
                  var t = [];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(
                      e,
                      r
                    ) && t.push(r);
                  return t;
                };
            },
          },
          n = {};
        function i(e) {
          var t = n[e];
          if (void 0 !== t) return t.exports;
          var o = (n[e] = { exports: {} }),
            s = !0;
          try {
            r[e](o, o.exports, i), (s = !1);
          } finally {
            s && delete n[e];
          }
          return o.exports;
        }
        i.ab = "//";
        var o = {};
        ((t = o).decode = t.parse = i(815)),
          (t.encode = t.stringify = i(577)),
          (e.exports = o);
      })();
    },
    8: function (e, t, r) {
      let n = r(4735);
      e.exports.Q = n;
    },
    4735: function (e, t, r) {
      "use strict";
      let n = r(3189).hU,
        i = r(7820)("number-allocator:trace"),
        o = r(7820)("number-allocator:error");
      function s(e, t) {
        (this.low = e), (this.high = t);
      }
      function a(e, t) {
        if (!(this instanceof a)) return new a(e, t);
        (this.min = e),
          (this.max = t),
          (this.ss = new n([], (e, t) => e.compare(t))),
          i("Create"),
          this.clear();
      }
      (s.prototype.equals = function (e) {
        return this.low === e.low && this.high === e.high;
      }),
        (s.prototype.compare = function (e) {
          return this.low < e.low && this.high < e.low
            ? -1
            : e.low < this.low && e.high < this.low
            ? 1
            : 0;
        }),
        (a.prototype.firstVacant = function () {
          return 0 === this.ss.size()
            ? null
            : this.ss.front().low;
        }),
        (a.prototype.alloc = function () {
          if (0 === this.ss.size())
            return i("alloc():empty"), null;
          let e = this.ss.begin(),
            t = e.pointer.low,
            r = e.pointer.high;
          return (
            t + 1 <= r
              ? this.ss.updateKeyByIterator(
                  e,
                  new s(t + 1, r)
                )
              : this.ss.eraseElementByPos(0),
            i("alloc():" + t),
            t
          );
        }),
        (a.prototype.use = function (e) {
          let t = new s(e, e),
            r = this.ss.lowerBound(t);
          if (!r.equals(this.ss.end())) {
            let n = r.pointer.low,
              o = r.pointer.high;
            return r.pointer.equals(t)
              ? (this.ss.eraseElementByIterator(r),
                i("use():" + e),
                !0)
              : !(n > e) &&
                  (n === e
                    ? (this.ss.updateKeyByIterator(
                        r,
                        new s(n + 1, o)
                      ),
                      i("use():" + e),
                      !0)
                    : o === e
                    ? (this.ss.updateKeyByIterator(
                        r,
                        new s(n, o - 1)
                      ),
                      i("use():" + e),
                      !0)
                    : (this.ss.updateKeyByIterator(
                        r,
                        new s(e + 1, o)
                      ),
                      this.ss.insert(new s(n, e - 1)),
                      i("use():" + e),
                      !0));
          }
          return i("use():failed"), !1;
        }),
        (a.prototype.free = function (e) {
          if (e < this.min || e > this.max) {
            o("free():" + e + " is out of range");
            return;
          }
          let t = new s(e, e),
            r = this.ss.upperBound(t);
          if (r.equals(this.ss.end())) {
            if (r.equals(this.ss.begin())) {
              this.ss.insert(t);
              return;
            }
            r.pre();
            let n = r.pointer.high,
              i = r.pointer.high;
            i + 1 === e
              ? this.ss.updateKeyByIterator(r, new s(n, e))
              : this.ss.insert(t);
          } else if (r.equals(this.ss.begin())) {
            if (e + 1 === r.pointer.low) {
              let t = r.pointer.high;
              this.ss.updateKeyByIterator(r, new s(e, t));
            } else this.ss.insert(t);
          } else {
            let n = r.pointer.low,
              i = r.pointer.high;
            r.pre();
            let o = r.pointer.low,
              a = r.pointer.high;
            a + 1 === e
              ? e + 1 === n
                ? (this.ss.eraseElementByIterator(r),
                  this.ss.updateKeyByIterator(
                    r,
                    new s(o, i)
                  ))
                : this.ss.updateKeyByIterator(
                    r,
                    new s(o, e)
                  )
              : e + 1 === n
              ? (this.ss.eraseElementByIterator(r.next()),
                this.ss.insert(new s(e, i)))
              : this.ss.insert(t);
          }
          i("free():" + e);
        }),
        (a.prototype.clear = function () {
          i("clear()"),
            this.ss.clear(),
            this.ss.insert(new s(this.min, this.max));
        }),
        (a.prototype.intervalCount = function () {
          return this.ss.size();
        }),
        (a.prototype.dump = function () {
          for (let e of (console.log(
            "length:" + this.ss.size()
          ),
          this.ss))
            console.log(e);
        }),
        (e.exports = a);
    },
    547: function (e, t, r) {
      var n = r(9792);
      function i(e) {
        var t = function () {
          return t.called
            ? t.value
            : ((t.called = !0),
              (t.value = e.apply(this, arguments)));
        };
        return (t.called = !1), t;
      }
      function o(e) {
        var t = function () {
            if (t.called) throw Error(t.onceError);
            return (
              (t.called = !0),
              (t.value = e.apply(this, arguments))
            );
          },
          r = e.name || "Function wrapped with `once`";
        return (
          (t.onceError =
            r + " shouldn't be called more than once"),
          (t.called = !1),
          t
        );
      }
      (e.exports = n(i)),
        (e.exports.strict = n(o)),
        (i.proto = i(function () {
          Object.defineProperty(
            Function.prototype,
            "once",
            {
              value: function () {
                return i(this);
              },
              configurable: !0,
            }
          ),
            Object.defineProperty(
              Function.prototype,
              "onceStrict",
              {
                value: function () {
                  return o(this);
                },
                configurable: !0,
              }
            );
        }));
    },
    1233: function (e, t, r) {
      "use strict";
      var n = r(4010);
      void 0 !== n &&
      n.version &&
      0 !== n.version.indexOf("v0.") &&
      (0 !== n.version.indexOf("v1.") ||
        0 === n.version.indexOf("v1.8."))
        ? (e.exports = n)
        : (e.exports = {
            nextTick: function (e, t, r, i) {
              if ("function" != typeof e)
                throw TypeError(
                  '"callback" argument must be a function'
                );
              var o,
                s,
                a = arguments.length;
              switch (a) {
                case 0:
                case 1:
                  return n.nextTick(e);
                case 2:
                  return n.nextTick(function () {
                    e.call(null, t);
                  });
                case 3:
                  return n.nextTick(function () {
                    e.call(null, t, r);
                  });
                case 4:
                  return n.nextTick(function () {
                    e.call(null, t, r, i);
                  });
                default:
                  for (
                    o = Array(a - 1), s = 0;
                    s < o.length;

                  )
                    o[s++] = arguments[s];
                  return n.nextTick(function () {
                    e.apply(null, o);
                  });
              }
            },
          });
    },
    7894: function (e) {
      "use strict";
      var t = {};
      function r(e, r, n) {
        n || (n = Error);
        var i = (function (e) {
          var t;
          function n(t, n, i) {
            return (
              e.call(
                this,
                "string" == typeof r ? r : r(t, n, i)
              ) || this
            );
          }
          return (
            ((t = n).prototype = Object.create(
              e.prototype
            )),
            (t.prototype.constructor = t),
            (t.__proto__ = e),
            n
          );
        })(n);
        (i.prototype.name = n.name),
          (i.prototype.code = e),
          (t[e] = i);
      }
      function n(e, t) {
        if (!Array.isArray(e))
          return "of ".concat(t, " ").concat(String(e));
        var r = e.length;
        return ((e = e.map(function (e) {
          return String(e);
        })),
        r > 2)
          ? "one of "
              .concat(t, " ")
              .concat(
                e.slice(0, r - 1).join(", "),
                ", or "
              ) + e[r - 1]
          : 2 === r
          ? "one of "
              .concat(t, " ")
              .concat(e[0], " or ")
              .concat(e[1])
          : "of ".concat(t, " ").concat(e[0]);
      }
      r(
        "ERR_INVALID_OPT_VALUE",
        function (e, t) {
          return (
            'The value "' +
            t +
            '" is invalid for option "' +
            e +
            '"'
          );
        },
        TypeError
      ),
        r(
          "ERR_INVALID_ARG_TYPE",
          function (e, t, r) {
            if (
              ("string" == typeof t &&
              ((i = "not "),
              t.substr(!o || o < 0 ? 0 : +o, i.length) ===
                i)
                ? ((l = "must not be"),
                  (t = t.replace(/^not /, "")))
                : (l = "must be"),
              (s = " argument"),
              (void 0 === a || a > e.length) &&
                (a = e.length),
              e.substring(a - s.length, a) === s)
            )
              c = "The "
                .concat(e, " ")
                .concat(l, " ")
                .concat(n(t, "type"));
            else {
              var i,
                o,
                s,
                a,
                u,
                l,
                c,
                h = ("number" != typeof u && (u = 0),
                u + 1 > e.length ||
                  -1 === e.indexOf(".", u))
                  ? "argument"
                  : "property";
              c = 'The "'
                .concat(e, '" ')
                .concat(h, " ")
                .concat(l, " ")
                .concat(n(t, "type"));
            }
            return c + ". Received type ".concat(typeof r);
          },
          TypeError
        ),
        r(
          "ERR_STREAM_PUSH_AFTER_EOF",
          "stream.push() after EOF"
        ),
        r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
          return "The " + e + " method is not implemented";
        }),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", function (e) {
          return (
            "Cannot call " +
            e +
            " after a stream was destroyed"
          );
        }),
        r(
          "ERR_MULTIPLE_CALLBACK",
          "Callback called multiple times"
        ),
        r(
          "ERR_STREAM_CANNOT_PIPE",
          "Cannot pipe, not readable"
        ),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        r(
          "ERR_UNKNOWN_ENCODING",
          function (e) {
            return "Unknown encoding: " + e;
          },
          TypeError
        ),
        r(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (e.exports.q = t);
    },
    7486: function (e, t, r) {
      "use strict";
      var n = r(4010),
        i =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = c;
      var o = r(7193),
        s = r(9196);
      r(2937)(c, o);
      for (
        var a = i(s.prototype), u = 0;
        u < a.length;
        u++
      ) {
        var l = a[u];
        c.prototype[l] || (c.prototype[l] = s.prototype[l]);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        o.call(this, e),
          s.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1),
              this.once("end", h)));
      }
      function h() {
        this._writableState.ended || n.nextTick(f, this);
      }
      function f(e) {
        e.end();
      }
      Object.defineProperty(
        c.prototype,
        "writableHighWaterMark",
        {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }
      ),
        Object.defineProperty(
          c.prototype,
          "writableBuffer",
          {
            enumerable: !1,
            get: function () {
              return (
                this._writableState &&
                this._writableState.getBuffer()
              );
            },
          }
        ),
        Object.defineProperty(
          c.prototype,
          "writableLength",
          {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }
        ),
        Object.defineProperty(c.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    },
    9603: function (e, t, r) {
      "use strict";
      e.exports = i;
      var n = r(2661);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        n.call(this, e);
      }
      r(2937)(i, n),
        (i.prototype._transform = function (e, t, r) {
          r(null, e);
        });
    },
    7193: function (e, t, r) {
      "use strict";
      var n,
        i,
        o,
        s,
        a,
        u = r(4010);
      (e.exports = A),
        (A.ReadableState = k),
        r(2100).EventEmitter;
      var l = function (e, t) {
          return e.listeners(t).length;
        },
        c = r(6890),
        h = r(1620).Buffer,
        f = r.g.Uint8Array || function () {},
        p = r(4504);
      i =
        p && p.debuglog
          ? p.debuglog("stream")
          : function () {};
      var d = r(5090),
        g = r(2222),
        y = r(4765).getHighWaterMark,
        b = r(7894).q,
        m = b.ERR_INVALID_ARG_TYPE,
        v = b.ERR_STREAM_PUSH_AFTER_EOF,
        _ = b.ERR_METHOD_NOT_IMPLEMENTED,
        w = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(2937)(A, c);
      var S = g.errorOrDestroy,
        E = [
          "error",
          "close",
          "destroy",
          "pause",
          "resume",
        ];
      function k(e, t, i) {
        (n = n || r(7486)),
          (e = e || {}),
          "boolean" != typeof i && (i = t instanceof n),
          (this.objectMode = !!e.objectMode),
          i &&
            (this.objectMode =
              this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = y(
            this,
            e,
            "readableHighWaterMark",
            i
          )),
          (this.buffer = new d()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding =
            e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (o || (o = r(2699).s),
            (this.decoder = new o(e.encoding)),
            (this.encoding = e.encoding));
      }
      function A(e) {
        if (((n = n || r(7486)), !(this instanceof A)))
          return new A(e);
        var t = this instanceof n;
        (this._readableState = new k(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read &&
              (this._read = e.read),
            "function" == typeof e.destroy &&
              (this._destroy = e.destroy)),
          c.call(this);
      }
      function I(e, t, r, n, o) {
        i("readableAddChunk", t);
        var s,
          a,
          u,
          l,
          c,
          p = e._readableState;
        if (null === t)
          (p.reading = !1),
            (function (e, t) {
              if ((i("onEofChunk"), !t.ended)) {
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r),
                    (t.length += t.objectMode
                      ? 1
                      : r.length));
                }
                (t.ended = !0),
                  t.sync
                    ? P(e)
                    : ((t.needReadable = !1),
                      t.emittedReadable ||
                        ((t.emittedReadable = !0), x(e)));
              }
            })(e, p);
        else {
          if (
            (o ||
              ((s = p),
              (a = t),
              h.isBuffer(a) ||
                a instanceof f ||
                "string" == typeof a ||
                void 0 === a ||
                s.objectMode ||
                (u = new m(
                  "chunk",
                  ["string", "Buffer", "Uint8Array"],
                  a
                )),
              (c = u)),
            c)
          )
            S(e, c);
          else if (p.objectMode || (t && t.length > 0)) {
            if (
              ("string" == typeof t ||
                p.objectMode ||
                Object.getPrototypeOf(t) === h.prototype ||
                ((l = t), (t = h.from(l))),
              n)
            )
              p.endEmitted ? S(e, new w()) : C(e, p, t, !0);
            else if (p.ended) S(e, new v());
            else {
              if (p.destroyed) return !1;
              (p.reading = !1),
                p.decoder && !r
                  ? ((t = p.decoder.write(t)),
                    p.objectMode || 0 !== t.length
                      ? C(e, p, t, !1)
                      : R(e, p))
                  : C(e, p, t, !1);
            }
          } else n || ((p.reading = !1), R(e, p));
        }
        return (
          !p.ended &&
          (p.length < p.highWaterMark || 0 === p.length)
        );
      }
      function C(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", r))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && P(e)),
          R(e, t);
      }
      function T(e, t) {
        if (e <= 0 || (0 === t.length && t.ended)) return 0;
        if (t.objectMode) return 1;
        if (e != e)
          return t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length;
        if (e > t.highWaterMark) {
          var r;
          t.highWaterMark =
            ((r = e) >= 1073741824
              ? (r = 1073741824)
              : (r--,
                (r |= r >>> 1),
                (r |= r >>> 2),
                (r |= r >>> 4),
                (r |= r >>> 8),
                (r |= r >>> 16),
                r++),
            r);
        }
        return e <= t.length
          ? e
          : t.ended
          ? t.length
          : ((t.needReadable = !0), 0);
      }
      function P(e) {
        var t = e._readableState;
        i(
          "emitReadable",
          t.needReadable,
          t.emittedReadable
        ),
          (t.needReadable = !1),
          t.emittedReadable ||
            (i("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            u.nextTick(x, e));
      }
      function x(e) {
        var t = e._readableState;
        i("emitReadable_", t.destroyed, t.length, t.ended),
          !t.destroyed &&
            (t.length || t.ended) &&
            (e.emit("readable"), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing &&
            !t.ended &&
            t.length <= t.highWaterMark),
          L(e);
      }
      function R(e, t) {
        t.readingMore ||
          ((t.readingMore = !0), u.nextTick(O, e, t));
      }
      function O(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark ||
            (t.flowing && 0 === t.length));

        ) {
          var r = t.length;
          if (
            (i("maybeReadMore read 0"),
            e.read(0),
            r === t.length)
          )
            break;
        }
        t.readingMore = !1;
      }
      function M(e) {
        var t = e._readableState;
        (t.readableListening =
          e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function N(e) {
        i("readable nexttick read 0"), e.read(0);
      }
      function B(e, t) {
        i("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          L(e),
          t.flowing && !t.reading && e.read(0);
      }
      function L(e) {
        var t = e._readableState;
        for (
          i("flow", t.flowing);
          t.flowing && null !== e.read();

        );
      }
      function U(e, t) {
        var r;
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = t.buffer.consume(e, t.decoder)),
            r);
      }
      function j(e) {
        var t = e._readableState;
        i("endReadable", t.endEmitted),
          t.endEmitted ||
            ((t.ended = !0), u.nextTick(D, t, e));
      }
      function D(e, t) {
        if (
          (i("endReadableNT", e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit("end"),
            e.autoDestroy))
        ) {
          var r = t._writableState;
          (!r || (r.autoDestroy && r.finished)) &&
            t.destroy();
        }
      }
      function q(e, t) {
        for (var r = 0, n = e.length; r < n; r++)
          if (e[r] === t) return r;
        return -1;
      }
      Object.defineProperty(A.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState &&
            this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState &&
            (this._readableState.destroyed = e);
        },
      }),
        (A.prototype.destroy = g.destroy),
        (A.prototype._undestroy = g.undestroy),
        (A.prototype._destroy = function (e, t) {
          t(e);
        }),
        (A.prototype.push = function (e, t) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" == typeof e &&
                ((t = t || n.defaultEncoding) !==
                  n.encoding &&
                  ((e = h.from(e, t)), (t = "")),
                (r = !0)),
            I(this, e, t, !1, r)
          );
        }),
        (A.prototype.unshift = function (e) {
          return I(this, e, null, !0, !1);
        }),
        (A.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (A.prototype.setEncoding = function (e) {
          o || (o = r(2699).s);
          var t = new o(e);
          (this._readableState.decoder = t),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (
            var n = this._readableState.buffer.head, i = "";
            null !== n;

          )
            (i += t.write(n.data)), (n = n.next);
          return (
            this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          );
        }),
        (A.prototype.read = function (e) {
          i("read", e), (e = parseInt(e, 10));
          var t,
            r = this._readableState,
            n = e;
          if (
            (0 !== e && (r.emittedReadable = !1),
            0 === e &&
              r.needReadable &&
              ((0 !== r.highWaterMark
                ? r.length >= r.highWaterMark
                : r.length > 0) ||
                r.ended))
          )
            return (
              i("read: emitReadable", r.length, r.ended),
              0 === r.length && r.ended ? j(this) : P(this),
              null
            );
          if (0 === (e = T(e, r)) && r.ended)
            return 0 === r.length && j(this), null;
          var o = r.needReadable;
          return (
            i("need readable", o),
            (0 === r.length ||
              r.length - e < r.highWaterMark) &&
              i("length less than watermark", (o = !0)),
            r.ended || r.reading
              ? i("reading or ended", (o = !1))
              : o &&
                (i("do read"),
                (r.reading = !0),
                (r.sync = !0),
                0 === r.length && (r.needReadable = !0),
                this._read(r.highWaterMark),
                (r.sync = !1),
                r.reading || (e = T(n, r))),
            null === (t = e > 0 ? U(e, r) : null)
              ? ((r.needReadable =
                  r.length <= r.highWaterMark),
                (e = 0))
              : ((r.length -= e), (r.awaitDrain = 0)),
            0 === r.length &&
              (r.ended || (r.needReadable = !0),
              n !== e && r.ended && j(this)),
            null !== t && this.emit("data", t),
            t
          );
        }),
        (A.prototype._read = function (e) {
          S(this, new _("_read()"));
        }),
        (A.prototype.pipe = function (e, t) {
          var r = this,
            n = this._readableState;
          switch (n.pipesCount) {
            case 0:
              n.pipes = e;
              break;
            case 1:
              n.pipes = [n.pipes, e];
              break;
            default:
              n.pipes.push(e);
          }
          (n.pipesCount += 1),
            i("pipe count=%d opts=%j", n.pipesCount, t);
          var o =
            (t && !1 === t.end) ||
            e === u.stdout ||
            e === u.stderr
              ? g
              : s;
          function s() {
            i("onend"), e.end();
          }
          n.endEmitted ? u.nextTick(o) : r.once("end", o),
            e.on("unpipe", function t(o, u) {
              i("onunpipe"),
                o === r &&
                  u &&
                  !1 === u.hasUnpiped &&
                  ((u.hasUnpiped = !0),
                  i("cleanup"),
                  e.removeListener("close", p),
                  e.removeListener("finish", d),
                  e.removeListener("drain", a),
                  e.removeListener("error", f),
                  e.removeListener("unpipe", t),
                  r.removeListener("end", s),
                  r.removeListener("end", g),
                  r.removeListener("data", h),
                  (c = !0),
                  n.awaitDrain &&
                    (!e._writableState ||
                      e._writableState.needDrain) &&
                    a());
            });
          var a = function () {
            var e = r._readableState;
            i("pipeOnDrain", e.awaitDrain),
              e.awaitDrain && e.awaitDrain--,
              0 === e.awaitDrain &&
                l(r, "data") &&
                ((e.flowing = !0), L(r));
          };
          e.on("drain", a);
          var c = !1;
          function h(t) {
            i("ondata");
            var o = e.write(t);
            i("dest.write", o),
              !1 === o &&
                (((1 === n.pipesCount && n.pipes === e) ||
                  (n.pipesCount > 1 &&
                    -1 !== q(n.pipes, e))) &&
                  !c &&
                  (i(
                    "false write response, pause",
                    n.awaitDrain
                  ),
                  n.awaitDrain++),
                r.pause());
          }
          function f(t) {
            i("onerror", t),
              g(),
              e.removeListener("error", f),
              0 === l(e, "error") && S(e, t);
          }
          function p() {
            e.removeListener("finish", d), g();
          }
          function d() {
            i("onfinish"),
              e.removeListener("close", p),
              g();
          }
          function g() {
            i("unpipe"), r.unpipe(e);
          }
          return (
            r.on("data", h),
            (function (e, t, r) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, r);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r);
            })(e, "error", f),
            e.once("close", p),
            e.once("finish", d),
            e.emit("pipe", r),
            n.flowing || (i("pipe resume"), r.resume()),
            e
          );
        }),
        (A.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, r)),
              this
            );
          if (!e) {
            var n = t.pipes,
              i = t.pipesCount;
            (t.pipes = null),
              (t.pipesCount = 0),
              (t.flowing = !1);
            for (var o = 0; o < i; o++)
              n[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var s = q(t.pipes, e);
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, r)),
            this
          );
        }),
        (A.prototype.on = function (e, t) {
          var r = c.prototype.on.call(this, e, t),
            n = this._readableState;
          return (
            "data" === e
              ? ((n.readableListening =
                  this.listenerCount("readable") > 0),
                !1 !== n.flowing && this.resume())
              : "readable" !== e ||
                n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable =
                  !0),
                (n.flowing = !1),
                (n.emittedReadable = !1),
                i("on readable", n.length, n.reading),
                n.length
                  ? P(this)
                  : n.reading || u.nextTick(N, this)),
            r
          );
        }),
        (A.prototype.addListener = A.prototype.on),
        (A.prototype.removeListener = function (e, t) {
          var r = c.prototype.removeListener.call(
            this,
            e,
            t
          );
          return "readable" === e && u.nextTick(M, this), r;
        }),
        (A.prototype.removeAllListeners = function (e) {
          var t = c.prototype.removeAllListeners.apply(
            this,
            arguments
          );
          return (
            ("readable" === e || void 0 === e) &&
              u.nextTick(M, this),
            t
          );
        }),
        (A.prototype.resume = function () {
          var e,
            t = this._readableState;
          return (
            t.flowing ||
              (i("resume"),
              (t.flowing = !t.readableListening),
              (e = t).resumeScheduled ||
                ((e.resumeScheduled = !0),
                u.nextTick(B, this, e))),
            (t.paused = !1),
            this
          );
        }),
        (A.prototype.pause = function () {
          return (
            i(
              "call pause flowing=%j",
              this._readableState.flowing
            ),
            !1 !== this._readableState.flowing &&
              (i("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (A.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1;
          for (var o in (e.on("end", function () {
            if ((i("wrapped end"), r.decoder && !r.ended)) {
              var e = r.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (o) {
            i("wrapped data"),
              r.decoder && (o = r.decoder.write(o)),
              (!r.objectMode || null != o) &&
                (r.objectMode || (o && o.length)) &&
                (t.push(o) || ((n = !0), e.pause()));
          }),
          e))
            void 0 === this[o] &&
              "function" == typeof e[o] &&
              (this[o] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(o));
          for (var s = 0; s < E.length; s++)
            e.on(E[s], this.emit.bind(this, E[s]));
          return (
            (this._read = function (t) {
              i("wrapped _read", t),
                n && ((n = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (A.prototype[Symbol.asyncIterator] = function () {
            return void 0 === s && (s = r(6653)), s(this);
          }),
        Object.defineProperty(
          A.prototype,
          "readableHighWaterMark",
          {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }
        ),
        Object.defineProperty(
          A.prototype,
          "readableBuffer",
          {
            enumerable: !1,
            get: function () {
              return (
                this._readableState &&
                this._readableState.buffer
              );
            },
          }
        ),
        Object.defineProperty(
          A.prototype,
          "readableFlowing",
          {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (e) {
              this._readableState &&
                (this._readableState.flowing = e);
            },
          }
        ),
        (A._fromList = U),
        Object.defineProperty(
          A.prototype,
          "readableLength",
          {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }
        ),
        "function" == typeof Symbol &&
          (A.from = function (e, t) {
            return (
              void 0 === a && (a = r(9939)), a(A, e, t)
            );
          });
    },
    2661: function (e, t, r) {
      "use strict";
      e.exports = c;
      var n = r(7894).q,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = n.ERR_TRANSFORM_WITH_LENGTH_0,
        u = r(7486);
      function l(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        u.call(this, e),
          (this._transformState = {
            afterTransform: l.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ("function" == typeof e.transform &&
              (this._transform = e.transform),
            "function" == typeof e.flush &&
              (this._flush = e.flush)),
          this.on("prefinish", h);
      }
      function h() {
        var e = this;
        "function" != typeof this._flush ||
        this._readableState.destroyed
          ? f(this, null, null)
          : this._flush(function (t, r) {
              f(e, t, r);
            });
      }
      function f(e, t, r) {
        if (t) return e.emit("error", t);
        if (
          (null != r && e.push(r), e._writableState.length)
        )
          throw new a();
        if (e._transformState.transforming) throw new s();
        return e.push(null);
      }
      r(2937)(c, u),
        (c.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            u.prototype.push.call(this, e, t)
          );
        }),
        (c.prototype._transform = function (e, t, r) {
          r(new i("_transform()"));
        }),
        (c.prototype._write = function (e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform ||
              i.needReadable ||
              i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (c.prototype._read = function (e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(
                t.writechunk,
                t.writeencoding,
                t.afterTransform
              ));
        }),
        (c.prototype._destroy = function (e, t) {
          u.prototype._destroy.call(this, e, function (e) {
            t(e);
          });
        });
    },
    9196: function (e, t, r) {
      "use strict";
      var n,
        i,
        o = r(4010);
      function s(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            (function (e, t, r) {
              var n = e.entry;
              for (e.entry = null; n; ) {
                var i = n.callback;
                t.pendingcb--, i(void 0), (n = n.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      (e.exports = A), (A.WritableState = k);
      var a = { deprecate: r(8863) },
        u = r(6890),
        l = r(1620).Buffer,
        c = r.g.Uint8Array || function () {},
        h = r(2222),
        f = r(4765).getHighWaterMark,
        p = r(7894).q,
        d = p.ERR_INVALID_ARG_TYPE,
        g = p.ERR_METHOD_NOT_IMPLEMENTED,
        y = p.ERR_MULTIPLE_CALLBACK,
        b = p.ERR_STREAM_CANNOT_PIPE,
        m = p.ERR_STREAM_DESTROYED,
        v = p.ERR_STREAM_NULL_VALUES,
        _ = p.ERR_STREAM_WRITE_AFTER_END,
        w = p.ERR_UNKNOWN_ENCODING,
        S = h.errorOrDestroy;
      function E() {}
      function k(e, t, i) {
        (n = n || r(7486)),
          (e = e || {}),
          "boolean" != typeof i && (i = t instanceof n),
          (this.objectMode = !!e.objectMode),
          i &&
            (this.objectMode =
              this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = f(
            this,
            e,
            "writableHighWaterMark",
            i
          )),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var a = !1 === e.decodeStrings;
        (this.decodeStrings = !a),
          (this.defaultEncoding =
            e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            (function (e, t) {
              var r,
                n,
                i = e._writableState,
                s = i.sync,
                a = i.writecb;
              if ("function" != typeof a) throw new y();
              if (
                (((r = i).writing = !1),
                (r.writecb = null),
                (r.length -= r.writelen),
                (r.writelen = 0),
                t)
              )
                (n = e),
                  --i.pendingcb,
                  s
                    ? (o.nextTick(a, t),
                      o.nextTick(R, n, i),
                      (n._writableState.errorEmitted = !0),
                      S(n, t))
                    : (a(t),
                      (n._writableState.errorEmitted = !0),
                      S(n, t),
                      R(n, i));
              else {
                var u = P(i) || e.destroyed;
                u ||
                  i.corked ||
                  i.bufferProcessing ||
                  !i.bufferedRequest ||
                  T(e, i),
                  s
                    ? o.nextTick(C, e, i, u, a)
                    : C(e, i, u, a);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new s(this));
      }
      function A(e) {
        var t = this instanceof (n = n || r(7486));
        if (!t && !i.call(A, this)) return new A(e);
        (this._writableState = new k(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write &&
              (this._write = e.write),
            "function" == typeof e.writev &&
              (this._writev = e.writev),
            "function" == typeof e.destroy &&
              (this._destroy = e.destroy),
            "function" == typeof e.final &&
              (this._final = e.final)),
          u.call(this);
      }
      function I(e, t, r, n, i, o, s) {
        (t.writelen = n),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new m("write"))
            : r
            ? e._writev(i, t.onwrite)
            : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function C(e, t, r, n) {
        var i;
        r ||
          (0 === (i = t).length &&
            i.needDrain &&
            ((i.needDrain = !1), e.emit("drain"))),
          t.pendingcb--,
          n(),
          R(e, t);
      }
      function T(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var n = Array(t.bufferedRequestCount),
            i = t.corkedRequestsFree;
          i.entry = r;
          for (var o = 0, a = !0; r; )
            (n[o] = r),
              r.isBuf || (a = !1),
              (r = r.next),
              (o += 1);
          (n.allBuffers = a),
            I(e, t, !0, t.length, n, "", i.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            i.next
              ? ((t.corkedRequestsFree = i.next),
                (i.next = null))
              : (t.corkedRequestsFree = new s(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var u = r.chunk,
              l = r.encoding,
              c = r.callback,
              h = t.objectMode ? 1 : u.length;
            if (
              (I(e, t, !1, h, u, l, c),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === r && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = r), (t.bufferProcessing = !1);
      }
      function P(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function x(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && S(e, r),
            (t.prefinished = !0),
            e.emit("prefinish"),
            R(e, t);
        });
      }
      function R(e, t) {
        var r,
          n = P(t);
        if (
          n &&
          ((r = t).prefinished ||
            r.finalCalled ||
            ("function" != typeof e._final || r.destroyed
              ? ((r.prefinished = !0), e.emit("prefinish"))
              : (r.pendingcb++,
                (r.finalCalled = !0),
                o.nextTick(x, e, r))),
          0 === t.pendingcb &&
            ((t.finished = !0),
            e.emit("finish"),
            t.autoDestroy))
        ) {
          var i = e._readableState;
          (!i || (i.autoDestroy && i.endEmitted)) &&
            e.destroy();
        }
        return n;
      }
      r(2937)(A, u),
        (k.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(k.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" ==
          typeof Function.prototype[Symbol.hasInstance]
          ? ((i = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(A, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!i.call(this, e) ||
                  (this === A &&
                    e &&
                    e._writableState instanceof k)
                );
              },
            }))
          : (i = function (e) {
              return e instanceof this;
            }),
        (A.prototype.pipe = function () {
          S(this, new b());
        }),
        (A.prototype.write = function (e, t, r) {
          var n,
            i,
            s,
            a,
            u,
            h,
            f,
            p = this._writableState,
            g = !1,
            y =
              !p.objectMode &&
              ((n = e), l.isBuffer(n) || n instanceof c);
          return (
            y &&
              !l.isBuffer(e) &&
              ((i = e), (e = l.from(i))),
            ("function" == typeof t &&
              ((r = t), (t = null)),
            y
              ? (t = "buffer")
              : t || (t = p.defaultEncoding),
            "function" != typeof r && (r = E),
            p.ending)
              ? ((s = r),
                S(this, (a = new _())),
                o.nextTick(s, a))
              : (y ||
                  ((u = e),
                  (h = r),
                  null === u
                    ? (f = new v())
                    : "string" == typeof u ||
                      p.objectMode ||
                      (f = new d(
                        "chunk",
                        ["string", "Buffer"],
                        u
                      )),
                  !f ||
                    (S(this, f), o.nextTick(h, f), 0))) &&
                (p.pendingcb++,
                (g = (function (e, t, r, n, i, o) {
                  if (!r) {
                    var s,
                      a,
                      u =
                        ((s = n),
                        (a = i),
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" != typeof s ||
                          (s = l.from(s, a)),
                        s);
                    n !== u &&
                      ((r = !0), (i = "buffer"), (n = u));
                  }
                  var c = t.objectMode ? 1 : n.length;
                  t.length += c;
                  var h = t.length < t.highWaterMark;
                  if (
                    (h || (t.needDrain = !0),
                    t.writing || t.corked)
                  ) {
                    var f = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      f
                        ? (f.next = t.lastBufferedRequest)
                        : (t.bufferedRequest =
                            t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else I(e, t, !1, c, n, i, o);
                  return h;
                })(this, p, y, e, t, r))),
            g
          );
        }),
        (A.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (A.prototype.uncork = function () {
          var e = this._writableState;
          !e.corked ||
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              T(this, e));
        }),
        (A.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new w(e);
          return (
            (this._writableState.defaultEncoding = e), this
          );
        }),
        Object.defineProperty(
          A.prototype,
          "writableBuffer",
          {
            enumerable: !1,
            get: function () {
              return (
                this._writableState &&
                this._writableState.getBuffer()
              );
            },
          }
        ),
        Object.defineProperty(
          A.prototype,
          "writableHighWaterMark",
          {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }
        ),
        (A.prototype._write = function (e, t, r) {
          r(new g("_write()"));
        }),
        (A.prototype._writev = null),
        (A.prototype.end = function (e, t, r) {
          var n,
            i,
            s,
            a = this._writableState;
          return (
            "function" == typeof e
              ? ((r = e), (e = null), (t = null))
              : "function" == typeof t &&
                ((r = t), (t = null)),
            null != e && this.write(e, t),
            a.corked && ((a.corked = 1), this.uncork()),
            a.ending ||
              ((n = this),
              (i = a),
              (s = r),
              (i.ending = !0),
              R(n, i),
              s &&
                (i.finished
                  ? o.nextTick(s)
                  : n.once("finish", s)),
              (i.ended = !0),
              (n.writable = !1)),
            this
          );
        }),
        Object.defineProperty(
          A.prototype,
          "writableLength",
          {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }
        ),
        Object.defineProperty(A.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState &&
              (this._writableState.destroyed = e);
          },
        }),
        (A.prototype.destroy = h.destroy),
        (A.prototype._undestroy = h.undestroy),
        (A.prototype._destroy = function (e, t) {
          t(e);
        });
    },
    6653: function (e, t, r) {
      "use strict";
      var n,
        i = r(4010);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var s = r(1714),
        a = Symbol("lastResolve"),
        u = Symbol("lastReject"),
        l = Symbol("error"),
        c = Symbol("ended"),
        h = Symbol("lastPromise"),
        f = Symbol("handlePromise"),
        p = Symbol("stream");
      function d(e, t) {
        return { value: e, done: t };
      }
      function g(e) {
        var t = e[a];
        if (null !== t) {
          var r = e[p].read();
          null !== r &&
            ((e[h] = null),
            (e[a] = null),
            (e[u] = null),
            t(d(r, !1)));
        }
      }
      function y(e) {
        i.nextTick(g, e);
      }
      var b = Object.getPrototypeOf(function () {}),
        m = Object.setPrototypeOf(
          (o(
            (n = {
              get stream() {
                return this[p];
              },
              next: function () {
                var e,
                  t,
                  r = this,
                  n = this[l];
                if (null !== n) return Promise.reject(n);
                if (this[c])
                  return Promise.resolve(d(void 0, !0));
                if (this[p].destroyed)
                  return new Promise(function (e, t) {
                    i.nextTick(function () {
                      r[l] ? t(r[l]) : e(d(void 0, !0));
                    });
                  });
                var o = this[h];
                if (o)
                  t = new Promise(
                    ((e = this),
                    function (t, r) {
                      o.then(function () {
                        if (e[c]) {
                          t(d(void 0, !0));
                          return;
                        }
                        e[f](t, r);
                      }, r);
                    })
                  );
                else {
                  var s = this[p].read();
                  if (null !== s)
                    return Promise.resolve(d(s, !1));
                  t = new Promise(this[f]);
                }
                return (this[h] = t), t;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(n, "return", function () {
            var e = this;
            return new Promise(function (t, r) {
              e[p].destroy(null, function (e) {
                if (e) {
                  r(e);
                  return;
                }
                t(d(void 0, !0));
              });
            });
          }),
          n),
          b
        );
      e.exports = function (e) {
        var t,
          r = Object.create(
            m,
            (o((t = {}), p, { value: e, writable: !0 }),
            o(t, a, { value: null, writable: !0 }),
            o(t, u, { value: null, writable: !0 }),
            o(t, l, { value: null, writable: !0 }),
            o(t, c, {
              value: e._readableState.endEmitted,
              writable: !0,
            }),
            o(t, f, {
              value: function (e, t) {
                var n = r[p].read();
                n
                  ? ((r[h] = null),
                    (r[a] = null),
                    (r[u] = null),
                    e(d(n, !1)))
                  : ((r[a] = e), (r[u] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (r[h] = null),
          s(e, function (e) {
            if (
              e &&
              "ERR_STREAM_PREMATURE_CLOSE" !== e.code
            ) {
              var t = r[u];
              null !== t &&
                ((r[h] = null),
                (r[a] = null),
                (r[u] = null),
                t(e)),
                (r[l] = e);
              return;
            }
            var n = r[a];
            null !== n &&
              ((r[h] = null),
              (r[a] = null),
              (r[u] = null),
              n(d(void 0, !0))),
              (r[c] = !0);
          }),
          e.on("readable", y.bind(null, r)),
          r
        );
      };
    },
    5090: function (e, t, r) {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(
                e,
                t
              ).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var o = r(1620).Buffer,
        s = r(8941).inspect,
        a = (s && s.custom) || "inspect";
      e.exports = (function () {
        var e, t;
        function r() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError(
                "Cannot call a class as a function"
              );
          })(this, r),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (e = [
            {
              key: "push",
              value: function (e) {
                var t = { data: e, next: null };
                this.length > 0
                  ? (this.tail.next = t)
                  : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null),
                  (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (e) {
                if (0 === this.length) return "";
                for (
                  var t = this.head, r = "" + t.data;
                  (t = t.next);

                )
                  r += e + t.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (e) {
                if (0 === this.length) return o.alloc(0);
                for (
                  var t,
                    r,
                    n = o.allocUnsafe(e >>> 0),
                    i = this.head,
                    s = 0;
                  i;

                )
                  (t = i.data),
                    (r = s),
                    o.prototype.copy.call(t, n, r),
                    (s += i.data.length),
                    (i = i.next);
                return n;
              },
            },
            {
              key: "consume",
              value: function (e, t) {
                var r;
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data =
                        this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : t
                          ? this._getString(e)
                          : this._getBuffer(e)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (e) {
                var t = this.head,
                  r = 1,
                  n = t.data;
                for (e -= n.length; (t = t.next); ) {
                  var i = t.data,
                    o = e > i.length ? i.length : e;
                  if (
                    (o === i.length
                      ? (n += i)
                      : (n += i.slice(0, e)),
                    0 == (e -= o))
                  ) {
                    o === i.length
                      ? (++r,
                        t.next
                          ? (this.head = t.next)
                          : (this.head = this.tail = null))
                      : ((this.head = t),
                        (t.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              },
            },
            {
              key: "_getBuffer",
              value: function (e) {
                var t = o.allocUnsafe(e),
                  r = this.head,
                  n = 1;
                for (
                  r.data.copy(t), e -= r.data.length;
                  (r = r.next);

                ) {
                  var i = r.data,
                    s = e > i.length ? i.length : e;
                  if (
                    (i.copy(t, t.length - e, 0, s),
                    0 == (e -= s))
                  ) {
                    s === i.length
                      ? (++n,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r),
                        (r.data = i.slice(s)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), t;
              },
            },
            {
              key: a,
              value: function (e, t) {
                return s(
                  this,
                  (function (e) {
                    for (
                      var t = 1;
                      t < arguments.length;
                      t++
                    ) {
                      var r =
                        null != arguments[t]
                          ? arguments[t]
                          : {};
                      t % 2
                        ? n(Object(r), !0).forEach(
                            function (t) {
                              var n, i;
                              (n = e),
                                (i = r[t]),
                                t in n
                                  ? Object.defineProperty(
                                      n,
                                      t,
                                      {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      }
                                    )
                                  : (n[t] = i);
                            }
                          )
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(
                              r
                            )
                          )
                        : n(Object(r)).forEach(function (
                            t
                          ) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(
                                r,
                                t
                              )
                            );
                          });
                    }
                    return e;
                  })({}, t, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          i(r.prototype, e),
          t && i(r, t),
          r
        );
      })();
    },
    2222: function (e, t, r) {
      "use strict";
      var n = r(4010);
      function i(e, t) {
        s(e, t), o(e);
      }
      function o(e) {
        (!e._writableState || e._writableState.emitClose) &&
          (!e._readableState ||
            e._readableState.emitClose) &&
          e.emit("close");
      }
      function s(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, t) {
          var r = this,
            a =
              this._readableState &&
              this._readableState.destroyed,
            u =
              this._writableState &&
              this._writableState.destroyed;
          return a || u
            ? (t
                ? t(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted =
                        !0),
                      n.nextTick(s, this, e))
                    : n.nextTick(s, this, e)),
              this)
            : (this._readableState &&
                (this._readableState.destroyed = !0),
              this._writableState &&
                (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !t && e
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? n.nextTick(o, r)
                      : ((r._writableState.errorEmitted =
                          !0),
                        n.nextTick(i, r, e))
                    : n.nextTick(i, r, e)
                  : t
                  ? (n.nextTick(o, r), t(e))
                  : n.nextTick(o, r);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (e, t) {
          var r = e._readableState,
            n = e._writableState;
          (r && r.autoDestroy) || (n && n.autoDestroy)
            ? e.destroy(t)
            : e.emit("error", t);
        },
      };
    },
    1714: function (e, t, r) {
      "use strict";
      var n = r(7894).q.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      e.exports = function e(t, r, o) {
        if ("function" == typeof r) return e(t, null, r);
        r || (r = {}),
          (s = o || i),
          (a = !1),
          (o = function () {
            if (!a) {
              a = !0;
              for (
                var e = arguments.length,
                  t = Array(e),
                  r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              s.apply(this, t);
            }
          });
        var s,
          a,
          u =
            r.readable || (!1 !== r.readable && t.readable),
          l =
            r.writable || (!1 !== r.writable && t.writable),
          c = function () {
            t.writable || f();
          },
          h = t._writableState && t._writableState.finished,
          f = function () {
            (l = !1), (h = !0), u || o.call(t);
          },
          p =
            t._readableState && t._readableState.endEmitted,
          d = function () {
            (u = !1), (p = !0), l || o.call(t);
          },
          g = function (e) {
            o.call(t, e);
          },
          y = function () {
            var e;
            return u && !p
              ? ((t._readableState &&
                  t._readableState.ended) ||
                  (e = new n()),
                o.call(t, e))
              : l && !h
              ? ((t._writableState &&
                  t._writableState.ended) ||
                  (e = new n()),
                o.call(t, e))
              : void 0;
          },
          b = function () {
            t.req.on("finish", f);
          };
        return (
          t.setHeader && "function" == typeof t.abort
            ? (t.on("complete", f),
              t.on("abort", y),
              t.req ? b() : t.on("request", b))
            : l &&
              !t._writableState &&
              (t.on("end", c), t.on("close", c)),
          t.on("end", d),
          t.on("finish", f),
          !1 !== r.error && t.on("error", g),
          t.on("close", y),
          function () {
            t.removeListener("complete", f),
              t.removeListener("abort", y),
              t.removeListener("request", b),
              t.req && t.req.removeListener("finish", f),
              t.removeListener("end", c),
              t.removeListener("close", c),
              t.removeListener("finish", f),
              t.removeListener("end", d),
              t.removeListener("error", g),
              t.removeListener("close", y);
          }
        );
      };
    },
    9939: function (e) {
      e.exports = function () {
        throw Error(
          "Readable.from is not available in the browser"
        );
      };
    },
    6668: function (e, t, r) {
      "use strict";
      var n,
        i = r(7894).q,
        o = i.ERR_MISSING_ARGS,
        s = i.ERR_STREAM_DESTROYED;
      function a(e) {
        if (e) throw e;
      }
      function u(e) {
        e();
      }
      function l(e, t) {
        return e.pipe(t);
      }
      e.exports = function () {
        for (
          var e,
            t,
            i = arguments.length,
            c = Array(i),
            h = 0;
          h < i;
          h++
        )
          c[h] = arguments[h];
        var f =
          (e = c).length &&
          "function" == typeof e[e.length - 1]
            ? e.pop()
            : a;
        if (
          (Array.isArray(c[0]) && (c = c[0]), c.length < 2)
        )
          throw new o("streams");
        var p = c.map(function (e, i) {
          var o,
            a,
            l,
            h,
            d,
            g = i < c.length - 1;
          return (
            (a = o =
              function (e) {
                t || (t = e),
                  e && p.forEach(u),
                  g || (p.forEach(u), f(t));
              }),
            (l = !1),
            (o = function () {
              l || ((l = !0), a.apply(void 0, arguments));
            }),
            (h = !1),
            e.on("close", function () {
              h = !0;
            }),
            void 0 === n && (n = r(1714)),
            n(
              e,
              { readable: g, writable: i > 0 },
              function (e) {
                if (e) return o(e);
                (h = !0), o();
              }
            ),
            (d = !1),
            function (t) {
              if (!h && !d) {
                if (
                  ((d = !0),
                  e.setHeader &&
                    "function" == typeof e.abort)
                )
                  return e.abort();
                if ("function" == typeof e.destroy)
                  return e.destroy();
                o(t || new s("pipe"));
              }
            }
          );
        });
        return c.reduce(l);
      };
    },
    4765: function (e, t, r) {
      "use strict";
      var n = r(7894).q.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function (e, t, r, i) {
          var o =
            null != t.highWaterMark
              ? t.highWaterMark
              : i
              ? t[r]
              : null;
          if (null != o) {
            if (
              !(isFinite(o) && Math.floor(o) === o) ||
              o < 0
            )
              throw new n(i ? r : "highWaterMark", o);
            return Math.floor(o);
          }
          return e.objectMode ? 16 : 16384;
        },
      };
    },
    6890: function (e, t, r) {
      e.exports = r(2100).EventEmitter;
    },
    3745: function (e, t, r) {
      ((t = e.exports = r(7193)).Stream = t),
        (t.Readable = t),
        (t.Writable = r(9196)),
        (t.Duplex = r(7486)),
        (t.Transform = r(2661)),
        (t.PassThrough = r(9603)),
        (t.finished = r(1714)),
        (t.pipeline = r(6668));
    },
    3949: function (e) {
      "use strict";
      function t(e, t, r) {
        var n = this;
        (this._callback = e),
          (this._args = r),
          (this._interval = setInterval(e, t, this._args)),
          (this.reschedule = function (e) {
            e || (e = n._interval),
              n._interval && clearInterval(n._interval),
              (n._interval = setInterval(
                n._callback,
                e,
                n._args
              ));
          }),
          (this.clear = function () {
            n._interval &&
              (clearInterval(n._interval),
              (n._interval = void 0));
          }),
          (this.destroy = function () {
            n._interval && clearInterval(n._interval),
              (n._callback = void 0),
              (n._interval = void 0),
              (n._args = void 0);
          });
      }
      e.exports = function () {
        if ("function" != typeof arguments[0])
          throw Error("callback needed");
        if ("number" != typeof arguments[1])
          throw Error("interval needed");
        if (arguments.length > 0) {
          e = Array(arguments.length - 2);
          for (var e, r = 0; r < e.length; r++)
            e[r] = arguments[r + 2];
        }
        return new t(arguments[0], arguments[1], e);
      };
    },
    2775: function (e, t, r) {
      "use strict";
      e.exports = r(1488)();
    },
    1488: function (e, t, r) {
      "use strict";
      var n = r(1620).Buffer;
      function i(e) {
        return e instanceof n
          ? n.from(e)
          : new e.constructor(
              e.buffer.slice(),
              e.byteOffset,
              e.length
            );
      }
      e.exports = function (e) {
        if ((e = e || {}).circles)
          return (function (e) {
            var t = [],
              r = [];
            return e.proto
              ? function e(o) {
                  if ("object" != typeof o || null === o)
                    return o;
                  if (o instanceof Date) return new Date(o);
                  if (Array.isArray(o)) return n(o, e);
                  if (o instanceof Map)
                    return new Map(n(Array.from(o), e));
                  if (o instanceof Set)
                    return new Set(n(Array.from(o), e));
                  var s = {};
                  for (var a in (t.push(o), r.push(s), o)) {
                    var u = o[a];
                    if ("object" != typeof u || null === u)
                      s[a] = u;
                    else if (u instanceof Date)
                      s[a] = new Date(u);
                    else if (u instanceof Map)
                      s[a] = new Map(n(Array.from(u), e));
                    else if (u instanceof Set)
                      s[a] = new Set(n(Array.from(u), e));
                    else if (ArrayBuffer.isView(u))
                      s[a] = i(u);
                    else {
                      var l = t.indexOf(u);
                      -1 !== l
                        ? (s[a] = r[l])
                        : (s[a] = e(u));
                    }
                  }
                  return t.pop(), r.pop(), s;
                }
              : function e(o) {
                  if ("object" != typeof o || null === o)
                    return o;
                  if (o instanceof Date) return new Date(o);
                  if (Array.isArray(o)) return n(o, e);
                  if (o instanceof Map)
                    return new Map(n(Array.from(o), e));
                  if (o instanceof Set)
                    return new Set(n(Array.from(o), e));
                  var s = {};
                  for (var a in (t.push(o), r.push(s), o))
                    if (
                      !1 !==
                      Object.hasOwnProperty.call(o, a)
                    ) {
                      var u = o[a];
                      if (
                        "object" != typeof u ||
                        null === u
                      )
                        s[a] = u;
                      else if (u instanceof Date)
                        s[a] = new Date(u);
                      else if (u instanceof Map)
                        s[a] = new Map(n(Array.from(u), e));
                      else if (u instanceof Set)
                        s[a] = new Set(n(Array.from(u), e));
                      else if (ArrayBuffer.isView(u))
                        s[a] = i(u);
                      else {
                        var l = t.indexOf(u);
                        -1 !== l
                          ? (s[a] = r[l])
                          : (s[a] = e(u));
                      }
                    }
                  return t.pop(), r.pop(), s;
                };
            function n(e, n) {
              for (
                var o = Object.keys(e),
                  s = Array(o.length),
                  a = 0;
                a < o.length;
                a++
              ) {
                var u = o[a],
                  l = e[u];
                if ("object" != typeof l || null === l)
                  s[u] = l;
                else if (l instanceof Date)
                  s[u] = new Date(l);
                else if (ArrayBuffer.isView(l)) s[u] = i(l);
                else {
                  var c = t.indexOf(l);
                  -1 !== c ? (s[u] = r[c]) : (s[u] = n(l));
                }
              }
              return s;
            }
          })(e);
        return e.proto
          ? function e(r) {
              if ("object" != typeof r || null === r)
                return r;
              if (r instanceof Date) return new Date(r);
              if (Array.isArray(r)) return t(r, e);
              if (r instanceof Map)
                return new Map(t(Array.from(r), e));
              if (r instanceof Set)
                return new Set(t(Array.from(r), e));
              var n = {};
              for (var o in r) {
                var s = r[o];
                "object" != typeof s || null === s
                  ? (n[o] = s)
                  : s instanceof Date
                  ? (n[o] = new Date(s))
                  : s instanceof Map
                  ? (n[o] = new Map(t(Array.from(s), e)))
                  : s instanceof Set
                  ? (n[o] = new Set(t(Array.from(s), e)))
                  : ArrayBuffer.isView(s)
                  ? (n[o] = i(s))
                  : (n[o] = e(s));
              }
              return n;
            }
          : function e(r) {
              if ("object" != typeof r || null === r)
                return r;
              if (r instanceof Date) return new Date(r);
              if (Array.isArray(r)) return t(r, e);
              if (r instanceof Map)
                return new Map(t(Array.from(r), e));
              if (r instanceof Set)
                return new Set(t(Array.from(r), e));
              var n = {};
              for (var o in r)
                if (
                  !1 !== Object.hasOwnProperty.call(r, o)
                ) {
                  var s = r[o];
                  "object" != typeof s || null === s
                    ? (n[o] = s)
                    : s instanceof Date
                    ? (n[o] = new Date(s))
                    : s instanceof Map
                    ? (n[o] = new Map(t(Array.from(s), e)))
                    : s instanceof Set
                    ? (n[o] = new Set(t(Array.from(s), e)))
                    : ArrayBuffer.isView(s)
                    ? (n[o] = i(s))
                    : (n[o] = e(s));
                }
              return n;
            };
        function t(e, t) {
          for (
            var r = Object.keys(e),
              n = Array(r.length),
              o = 0;
            o < r.length;
            o++
          ) {
            var s = r[o],
              a = e[s];
            "object" != typeof a || null === a
              ? (n[s] = a)
              : a instanceof Date
              ? (n[s] = new Date(a))
              : ArrayBuffer.isView(a)
              ? (n[s] = i(a))
              : (n[s] = t(a));
          }
          return n;
        }
      };
    },
    1874: function (e, t, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n =
          r(1620),
        i = n.Buffer;
      function o(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function s(e, t, r) {
        return i(e, t, r);
      }
      i.from &&
      i.alloc &&
      i.allocUnsafe &&
      i.allocUnsafeSlow
        ? (e.exports = n)
        : (o(n, t), (t.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (e, t, r) {
          if ("number" == typeof e)
            throw TypeError(
              "Argument must not be a number"
            );
          return i(e, t, r);
        }),
        (s.alloc = function (e, t, r) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          var n = i(e);
          return (
            void 0 !== t
              ? "string" == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (e) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          return i(e);
        }),
        (s.allocUnsafeSlow = function (e) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(e);
        });
    },
    7062: function (e) {
      e.exports = function (e) {
        var t = e._readableState;
        return t
          ? t.objectMode ||
            "number" == typeof e._duplexState
            ? e.read()
            : e.read(
                t.buffer.length
                  ? t.buffer.head
                    ? t.buffer.head.data.length
                    : t.buffer[0].length
                  : t.length
              )
          : null;
      };
    },
    2699: function (e, t, r) {
      "use strict";
      var n = r(1874).Buffer,
        i =
          n.isEncoding ||
          function (e) {
            switch ((e = "" + e) && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(e) {
        var t;
        switch (
          ((this.encoding = (function (e) {
            var t = (function (e) {
              var t;
              if (!e) return "utf8";
              for (;;)
                switch (e) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return e;
                  default:
                    if (t) return;
                    (e = ("" + e).toLowerCase()), (t = !0);
                }
            })(e);
            if (
              "string" != typeof t &&
              (n.isEncoding === i || !i(e))
            )
              throw Error("Unknown encoding: " + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = u), (this.end = l), (t = 4);
            break;
          case "utf8":
            (this.fillLast = a), (t = 4);
            break;
          case "base64":
            (this.text = c), (this.end = h), (t = 3);
            break;
          default:
            (this.write = f), (this.end = p);
            return;
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t));
      }
      function s(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2;
      }
      function a(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function (e, t, r) {
            if ((192 & t[0]) != 128)
              return (e.lastNeed = 0), "�";
            if (e.lastNeed > 1 && t.length > 1) {
              if ((192 & t[1]) != 128)
                return (e.lastNeed = 1), "�";
              if (
                e.lastNeed > 2 &&
                t.length > 2 &&
                (192 & t[2]) != 128
              )
                return (e.lastNeed = 2), "�";
            }
          })(this, e, 0);
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(
              this.encoding,
              0,
              this.lastTotal
            ))
          : void (e.copy(this.lastChar, t, 0, e.length),
            (this.lastNeed -= e.length));
      }
      function u(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString("utf16le", t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString("utf16le", t, e.length - 1)
        );
      }
      function l(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return (
            t + this.lastChar.toString("utf16le", 0, r)
          );
        }
        return t;
      }
      function c(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r
          ? e.toString("base64", t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString("base64", t, e.length - r));
      }
      function h(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed
          ? t +
              this.lastChar.toString(
                "base64",
                0,
                3 - this.lastNeed
              )
          : t;
      }
      function f(e) {
        return e.toString(this.encoding);
      }
      function p(e) {
        return e && e.length ? this.write(e) : "";
      }
      (t.s = o),
        (o.prototype.write = function (e) {
          var t, r;
          if (0 === e.length) return "";
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e)))
              return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || "";
        }),
        (o.prototype.end = function (e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed ? t + "�" : t;
        }),
        (o.prototype.text = function (e, t) {
          var r = (function (e, t, r) {
            var n = t.length - 1;
            if (n < r) return 0;
            var i = s(t[n]);
            return i >= 0
              ? (i > 0 && (e.lastNeed = i - 1), i)
              : --n < r || -2 === i
              ? 0
              : (i = s(t[n])) >= 0
              ? (i > 0 && (e.lastNeed = i - 2), i)
              : --n < r || -2 === i
              ? 0
              : (i = s(t[n])) >= 0
              ? (i > 0 &&
                  (2 === i
                    ? (i = 0)
                    : (e.lastNeed = i - 3)),
                i)
              : 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString("utf8", t);
          this.lastTotal = r;
          var n = e.length - (r - this.lastNeed);
          return (
            e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
          );
        }),
        (o.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(
                this.encoding,
                0,
                this.lastTotal
              )
            );
          e.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            e.length
          ),
            (this.lastNeed -= e.length);
        });
    },
    8863: function (e, t, r) {
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw Error(t);
            n("traceDeprecation")
              ? console.trace(t)
              : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
      function n(e) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var t = r.g.localStorage[e];
        return (
          null != t && "true" === String(t).toLowerCase()
        );
      }
    },
    9792: function (e) {
      e.exports = function e(t, r) {
        if (t && r) return e(t)(r);
        if ("function" != typeof t)
          throw TypeError("need wrapper function");
        return (
          Object.keys(t).forEach(function (e) {
            n[e] = t[e];
          }),
          n
        );
        function n() {
          for (
            var e = Array(arguments.length), r = 0;
            r < e.length;
            r++
          )
            e[r] = arguments[r];
          var n = t.apply(this, e),
            i = e[e.length - 1];
          return (
            "function" == typeof n &&
              n !== i &&
              Object.keys(i).forEach(function (e) {
                n[e] = i[e];
              }),
            n
          );
        }
      };
    },
    5783: function (e) {
      "use strict";
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    6192: function (e) {
      e.exports = function () {
        for (var e = {}, r = 0; r < arguments.length; r++) {
          var n = arguments[r];
          for (var i in n) t.call(n, i) && (e[i] = n[i]);
        }
        return e;
      };
      var t = Object.prototype.hasOwnProperty;
    },
    1162: function (e) {
      "use strict";
      e.exports = function (e) {
        e.prototype[Symbol.iterator] = function* () {
          for (let e = this.head; e; e = e.next)
            yield e.value;
        };
      };
    },
    9900: function (e, t, r) {
      "use strict";
      function n(e) {
        var t = this;
        if (
          (t instanceof n || (t = new n()),
          (t.tail = null),
          (t.head = null),
          (t.length = 0),
          e && "function" == typeof e.forEach)
        )
          e.forEach(function (e) {
            t.push(e);
          });
        else if (arguments.length > 0)
          for (var r = 0, i = arguments.length; r < i; r++)
            t.push(arguments[r]);
        return t;
      }
      function i(e, t, r, n) {
        if (!(this instanceof i)) return new i(e, t, r, n);
        (this.list = n),
          (this.value = e),
          t
            ? ((t.next = this), (this.prev = t))
            : (this.prev = null),
          r
            ? ((r.prev = this), (this.next = r))
            : (this.next = null);
      }
      (e.exports = n),
        (n.Node = i),
        (n.create = n),
        (n.prototype.removeNode = function (e) {
          if (e.list !== this)
            throw Error(
              "removing node which does not belong to this list"
            );
          var t = e.next,
            r = e.prev;
          return (
            t && (t.prev = r),
            r && (r.next = t),
            e === this.head && (this.head = t),
            e === this.tail && (this.tail = r),
            e.list.length--,
            (e.next = null),
            (e.prev = null),
            (e.list = null),
            t
          );
        }),
        (n.prototype.unshiftNode = function (e) {
          if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            (e.list = this),
              (e.next = t),
              t && (t.prev = e),
              (this.head = e),
              this.tail || (this.tail = e),
              this.length++;
          }
        }),
        (n.prototype.pushNode = function (e) {
          if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            (e.list = this),
              (e.prev = t),
              t && (t.next = e),
              (this.tail = e),
              this.head || (this.head = e),
              this.length++;
          }
        }),
        (n.prototype.push = function () {
          for (
            var e, t, r = 0, n = arguments.length;
            r < n;
            r++
          )
            (e = this),
              (t = arguments[r]),
              (e.tail = new i(t, e.tail, null, e)),
              e.head || (e.head = e.tail),
              e.length++;
          return this.length;
        }),
        (n.prototype.unshift = function () {
          for (
            var e, t, r = 0, n = arguments.length;
            r < n;
            r++
          )
            (e = this),
              (t = arguments[r]),
              (e.head = new i(t, null, e.head, e)),
              e.tail || (e.tail = e.head),
              e.length++;
          return this.length;
        }),
        (n.prototype.pop = function () {
          if (this.tail) {
            var e = this.tail.value;
            return (
              (this.tail = this.tail.prev),
              this.tail
                ? (this.tail.next = null)
                : (this.head = null),
              this.length--,
              e
            );
          }
        }),
        (n.prototype.shift = function () {
          if (this.head) {
            var e = this.head.value;
            return (
              (this.head = this.head.next),
              this.head
                ? (this.head.prev = null)
                : (this.tail = null),
              this.length--,
              e
            );
          }
        }),
        (n.prototype.forEach = function (e, t) {
          t = t || this;
          for (var r = this.head, n = 0; null !== r; n++)
            e.call(t, r.value, n, this), (r = r.next);
        }),
        (n.prototype.forEachReverse = function (e, t) {
          t = t || this;
          for (
            var r = this.tail, n = this.length - 1;
            null !== r;
            n--
          )
            e.call(t, r.value, n, this), (r = r.prev);
        }),
        (n.prototype.get = function (e) {
          for (
            var t = 0, r = this.head;
            null !== r && t < e;
            t++
          )
            r = r.next;
          if (t === e && null !== r) return r.value;
        }),
        (n.prototype.getReverse = function (e) {
          for (
            var t = 0, r = this.tail;
            null !== r && t < e;
            t++
          )
            r = r.prev;
          if (t === e && null !== r) return r.value;
        }),
        (n.prototype.map = function (e, t) {
          t = t || this;
          for (var r = new n(), i = this.head; null !== i; )
            r.push(e.call(t, i.value, this)), (i = i.next);
          return r;
        }),
        (n.prototype.mapReverse = function (e, t) {
          t = t || this;
          for (var r = new n(), i = this.tail; null !== i; )
            r.push(e.call(t, i.value, this)), (i = i.prev);
          return r;
        }),
        (n.prototype.reduce = function (e, t) {
          var r,
            n = this.head;
          if (arguments.length > 1) r = t;
          else if (this.head)
            (n = this.head.next), (r = this.head.value);
          else
            throw TypeError(
              "Reduce of empty list with no initial value"
            );
          for (var i = 0; null !== n; i++)
            (r = e(r, n.value, i)), (n = n.next);
          return r;
        }),
        (n.prototype.reduceReverse = function (e, t) {
          var r,
            n = this.tail;
          if (arguments.length > 1) r = t;
          else if (this.tail)
            (n = this.tail.prev), (r = this.tail.value);
          else
            throw TypeError(
              "Reduce of empty list with no initial value"
            );
          for (var i = this.length - 1; null !== n; i--)
            (r = e(r, n.value, i)), (n = n.prev);
          return r;
        }),
        (n.prototype.toArray = function () {
          for (
            var e = Array(this.length),
              t = 0,
              r = this.head;
            null !== r;
            t++
          )
            (e[t] = r.value), (r = r.next);
          return e;
        }),
        (n.prototype.toArrayReverse = function () {
          for (
            var e = Array(this.length),
              t = 0,
              r = this.tail;
            null !== r;
            t++
          )
            (e[t] = r.value), (r = r.prev);
          return e;
        }),
        (n.prototype.slice = function (e, t) {
          (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
          var r = new n();
          if (t < e || t < 0) return r;
          e < 0 && (e = 0),
            t > this.length && (t = this.length);
          for (
            var i = 0, o = this.head;
            null !== o && i < e;
            i++
          )
            o = o.next;
          for (; null !== o && i < t; i++, o = o.next)
            r.push(o.value);
          return r;
        }),
        (n.prototype.sliceReverse = function (e, t) {
          (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
          var r = new n();
          if (t < e || t < 0) return r;
          e < 0 && (e = 0),
            t > this.length && (t = this.length);
          for (
            var i = this.length, o = this.tail;
            null !== o && i > t;
            i--
          )
            o = o.prev;
          for (; null !== o && i > e; i--, o = o.prev)
            r.push(o.value);
          return r;
        }),
        (n.prototype.splice = function (e, t, ...r) {
          e > this.length && (e = this.length - 1),
            e < 0 && (e = this.length + e);
          for (
            var n = 0, o = this.head;
            null !== o && n < e;
            n++
          )
            o = o.next;
          for (var s = [], n = 0; o && n < t; n++)
            s.push(o.value), (o = this.removeNode(o));
          null === o && (o = this.tail),
            o !== this.head &&
              o !== this.tail &&
              (o = o.prev);
          for (var n = 0; n < r.length; n++)
            o = (function (e, t, r) {
              var n =
                t === e.head
                  ? new i(r, null, t, e)
                  : new i(r, t, t.next, e);
              return (
                null === n.next && (e.tail = n),
                null === n.prev && (e.head = n),
                e.length++,
                n
              );
            })(this, o, r[n]);
          return s;
        }),
        (n.prototype.reverse = function () {
          for (
            var e = this.head, t = this.tail, r = e;
            null !== r;
            r = r.prev
          ) {
            var n = r.prev;
            (r.prev = r.next), (r.next = n);
          }
          return (this.head = t), (this.tail = e), this;
        });
      try {
        r(1162)(n);
      } catch (e) {}
    },
  },
]);
