(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    5411: function (n, r, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return e(9511);
        },
      ]);
    },
    9086: function (n, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return c;
        },
      });
      var i = e(1527),
        t = e(5580),
        s = e.n(t);
      function c() {
        return (0, i.jsx)("header", {
          children: (0, i.jsxs)("ul", {
            children: [
              (0, i.jsx)("li", {
                children: (0, i.jsx)(s(), {
                  href: "/",
                  children: "Home",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(s(), {
                  href: "/about",
                  children: "About",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(s(), {
                  href: "/post/first",
                  children: "First Post",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(s(), {
                  href: "/post/second",
                  children: "Second Post",
                }),
              }),
            ],
          }),
        });
      }
    },
    9511: function (n, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          default: function () {
            return s;
          },
        });
      var i = e(1527),
        t = e(9086);
      function s() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.Z, {}),
            (0, i.jsx)("h1", { children: "About page" }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 5411));
    }),
      (_N_E = n.O());
  },
]);
