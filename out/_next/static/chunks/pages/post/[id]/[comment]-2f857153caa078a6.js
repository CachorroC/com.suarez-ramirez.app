(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [699],
  {
    8200: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/post/[id]/[comment]",
        function () {
          return r(1084);
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
      var t = r(1527),
        s = r(5580),
        i = r.n(s);
      function c() {
        return (0, t.jsx)("header", {
          children: (0, t.jsxs)("ul", {
            children: [
              (0, t.jsx)("li", {
                children: (0, t.jsx)(i(), {
                  href: "/",
                  children: "Home",
                }),
              }),
              (0, t.jsx)("li", {
                children: (0, t.jsx)(i(), {
                  href: "/about",
                  children: "About",
                }),
              }),
              (0, t.jsx)("li", {
                children: (0, t.jsx)(i(), {
                  href: "/post/first",
                  children: "First Post",
                }),
              }),
              (0, t.jsx)("li", {
                children: (0, t.jsx)(i(), {
                  href: "/post/second",
                  children: "Second Post",
                }),
              }),
            ],
          }),
        });
      }
    },
    1084: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var t = r(1527),
        s = r(369),
        i = r(9086);
      function c() {
        let n = (0, s.useRouter)(),
          e = n.query.id,
          r = n.query.comment;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.Z, {}),
            (0, t.jsxs)("h1", { children: ["Post: ", e] }),
            (0, t.jsxs)("h1", {
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
      return n((n.s = 8200));
    }),
      (_N_E = n.O());
  },
]);
