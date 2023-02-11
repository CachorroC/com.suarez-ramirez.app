(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [927],
  {
    6682: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/links/[id]",
        function () {
          return r(5522);
        },
      ]);
    },
    9086: function (n, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return c;
        },
      });
      var s = r(1527),
        i = r(5580),
        t = r.n(i);
      function c() {
        return (0, s.jsx)("header", {
          children: (0, s.jsxs)("ul", {
            children: [
              (0, s.jsx)("li", {
                children: (0, s.jsx)(t(), {
                  href: "/",
                  children: "Home",
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(t(), {
                  href: "/about",
                  children: "About",
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(t(), {
                  href: "/post/first",
                  children: "First Post",
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(t(), {
                  href: "/post/second",
                  children: "Second Post",
                }),
              }),
            ],
          }),
        });
      }
    },
    5522: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var s = r(1527),
        i = r(369),
        t = r(9086);
      function c() {
        let n = (0, i.useRouter)(),
          e = n.query.id,
          r = n.query.comment;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.Z, {}),
            (0, s.jsxs)("h1", { children: ["Post: ", e] }),
            (0, s.jsxs)("h1", {
              children: ["Comment: ", r],
            }),
          ],
        });
      }
    },
    369: function (n, e, r) {
      n.exports = r(7808);
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 6682));
    }),
      (_N_E = n.O());
  },
]);
