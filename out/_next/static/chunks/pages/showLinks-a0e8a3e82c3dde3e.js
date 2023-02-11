(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    1661: function (e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/showLinks",
        function () {
          return s(8763);
        },
      ]);
    },
    6118: function (e, n, s) {
      "use strict";
      s.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = s(1527),
        d = s(8071),
        t = s.n(d),
        o = s(2588),
        l = s(9536);
      function a(e) {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o.Z, {}),
            (0, i.jsx)("main", {
              className: t().main,
              children: e.children,
            }),
            (0, i.jsx)(l.Z, {}),
          ],
        });
      }
      s(959);
    },
    8763: function (e, n, s) {
      "use strict";
      s.r(n),
        s.d(n, {
          __N_SSP: function () {
            return a;
          },
          default: function () {
            return c;
          },
        });
      var i = s(1527),
        d = s(3497),
        t = s.n(d),
        o = s(959),
        l = s(6118),
        a = !0;
      function c(e) {
        let [n, s] = (0, o.useState)(e.links),
          d = async (e) => {
            try {
              let n = await fetch(
                "http://localhost:3000/api/delLink?id=" + e,
                {
                  method: "POST",
                  headers: {
                    Accept:
                      "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                  },
                }
              );
              (n = await n.json()),
                window.location.reload();
            } catch (e) {
              console.log(
                "An error occurred while deleting ",
                e
              );
            }
          };
        return (0, i.jsxs)(l.Z, {
          children: [
            (0, i.jsxs)("div", {
              className: "jsx-97b4696b48d524df links-body",
              children: [
                (0, i.jsx)("h1", {
                  className:
                    "jsx-97b4696b48d524df links-body-heading",
                  children: "Top 20 Added Links",
                }),
                n.length > 0
                  ? (0, i.jsx)("ul", {
                      className:
                        "jsx-97b4696b48d524df links-list",
                      children: n.map((e, n) =>
                        (0, i.jsxs)(
                          "li",
                          {
                            className:
                              "jsx-97b4696b48d524df link-item",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "jsx-97b4696b48d524df link-item-details",
                                children: [
                                  (0, i.jsx)("h2", {
                                    className:
                                      "jsx-97b4696b48d524df",
                                    children: e.name,
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "jsx-97b4696b48d524df",
                                    children: e.url,
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "jsx-97b4696b48d524df link-item-actions",
                                children: [
                                  (0, i.jsx)("a", {
                                    href: "/links/".concat(
                                      e._id
                                    ),
                                    className:
                                      "jsx-97b4696b48d524df",
                                    children: "Edit",
                                  }),
                                  (0, i.jsx)("button", {
                                    onClick: () => d(e._id),
                                    className:
                                      "jsx-97b4696b48d524df",
                                    children: "Delete",
                                  }),
                                ],
                              }),
                            ],
                          },
                          n
                        )
                      ),
                    })
                  : (0, i.jsx)("h2", {
                      className:
                        "jsx-97b4696b48d524df links-body-heading",
                      children:
                        "Ooops! No links added so far",
                    }),
              ],
            }),
            (0, i.jsx)(t(), {
              id: "97b4696b48d524df",
              children:
                ".links-body.jsx-97b4696b48d524df{width:400px;margin:10px auto}.links-body-heading.jsx-97b4696b48d524df{font-family:sans-serif}.links-list.jsx-97b4696b48d524df{list-style-type:none;display:block}.link-item.jsx-97b4696b48d524df{width:100%;padding:10px;border:1px solid#d5d5d5}.link-item-actions.jsx-97b4696b48d524df{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.link-item-actions.jsx-97b4696b48d524df a.jsx-97b4696b48d524df{text-decoration:none}",
            }),
          ],
        });
      }
    },
    8071: function (e) {
      e.exports = {
        main: "Home_main__zgAJj",
        description: "Home_description__TOUL9",
        code: "Home_code__8gjYY",
        grid: "Home_grid__o5jCu",
        card: "Home_card__Yp_uv",
        center: "Home_center__EFpuL",
        logo: "Home_logo__2x9Es",
        thirteen: "Home_thirteen__ZyzYO",
        rotate: "Home_rotate__v2PCn",
        content: "Home_content__f1lUf",
        vercelLogo: "Home_vercelLogo__vzH7k",
      };
    },
  },
  function (e) {
    e.O(0, [497, 774, 888, 179], function () {
      return e((e.s = 1661));
    }),
      (_N_E = e.O());
  },
]);
