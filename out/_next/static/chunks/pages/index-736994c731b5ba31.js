(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8305: function (e, n, _) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return _(3673);
        },
      ]);
    },
    3673: function (e, n, _) {
      "use strict";
      _.r(n),
        _.d(n, {
          __N_SSG: function () {
            return s;
          },
          default: function () {
            return a;
          },
        });
      var o = _(1527),
        r = _(5580),
        t = _.n(r),
        c = _(8071),
        i = _.n(c);
      _(6715);
      var s = !0;
      function a(e) {
        let { links: n } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("ul", {
              className: i().grid,
              children: n.map((e) =>
                (0, o.jsx)(
                  t(),
                  {
                    href: e.url,
                    className: i().link,
                    children: (0, o.jsxs)("li", {
                      className: i().card,
                      children: [
                        (0, o.jsx)("h2", {
                          className: i().linkname,
                          children: e.name,
                        }),
                        (0, o.jsx)("span", {
                          className:
                            "material-symbols-outlined",
                          children: e.icon,
                        }),
                      ],
                    }),
                  },
                  e.name
                )
              ),
            }),
            " ",
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
    6715: function () {},
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 8305));
    }),
      (_N_E = e.O());
  },
]);
