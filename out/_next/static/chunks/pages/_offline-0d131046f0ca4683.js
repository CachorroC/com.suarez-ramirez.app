(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [95],
  {
    2792: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_offline",
        function () {
          return r(9395);
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
      var i = r(1527),
        s = r(5580),
        t = r.n(s);
      function c() {
        return (0, i.jsx)("header", {
          children: (0, i.jsxs)("ul", {
            children: [
              (0, i.jsx)("li", {
                children: (0, i.jsx)(t(), {
                  href: "/",
                  children: "Home",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(t(), {
                  href: "/about",
                  children: "About",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(t(), {
                  href: "/post/first",
                  children: "First Post",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(t(), {
                  href: "/post/second",
                  children: "Second Post",
                }),
              }),
            ],
          }),
        });
      }
    },
    9395: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return t;
          },
        });
      var i = r(1527),
        s = r(9086);
      function t() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Z, {}),
            (0, i.jsx)("h1", {
              children: "You are offline",
            }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 2792));
    }),
      (_N_E = n.O());
  },
]);
