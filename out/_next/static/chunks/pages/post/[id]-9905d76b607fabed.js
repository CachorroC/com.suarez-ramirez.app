(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [687],
  {
    4609: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/post/[id]",
        function () {
          return r(9724);
        },
      ]);
    },
    9086: function (n, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var s = r(1527),
        t = r(5580),
        c = r.n(t);
      function i() {
        return (0, s.jsx)("header", {
          children: (0, s.jsxs)("ul", {
            children: [
              (0, s.jsx)("li", {
                children: (0, s.jsx)(c(), {
                  href: "/",
                  children: "Home",
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(c(), {
                  href: "/about",
                  children: "About",
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(c(), {
                  href: "/post/first",
                  children: "First Post",
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(c(), {
                  href: "/post/second",
                  children: "Second Post",
                }),
              }),
            ],
          }),
        });
      }
    },
    9724: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return u;
          },
        });
      var s = r(1527),
        t = r(369),
        c = r(5580),
        i = r.n(c),
        o = r(9086);
      function u() {
        let n = (0, t.useRouter)(),
          e = n.query.id;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.Z, {}),
            (0, s.jsxs)("h1", { children: ["Post: ", e] }),
            (0, s.jsxs)("ul", {
              children: [
                (0, s.jsx)("li", {
                  children: (0, s.jsx)(i(), {
                    href: "/post/".concat(
                      e,
                      "/first-comment"
                    ),
                    children: "First comment",
                  }),
                }),
                (0, s.jsx)("li", {
                  children: (0, s.jsx)(i(), {
                    href: "/post/".concat(
                      e,
                      "/second-comment"
                    ),
                    children: "Second comment",
                  }),
                }),
              ],
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
      return n((n.s = 4609));
    }),
      (_N_E = n.O());
  },
]);
