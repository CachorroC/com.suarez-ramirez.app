(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [935],
  {
    1967: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/links",
        function () {
          return t(9018);
        },
      ]);
    },
    6118: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return i;
        },
      });
      var c = t(1527),
        n = t(8071),
        s = t.n(n),
        o = t(2588),
        r = t(9536);
      function i(e) {
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(o.Z, {}),
            (0, c.jsx)("main", {
              className: s().main,
              children: e.children,
            }),
            (0, c.jsx)(r.Z, {}),
          ],
        });
      }
      t(959);
    },
    9018: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return i;
          },
        });
      var c = t(1527),
        n = t(3497),
        s = t.n(n),
        o = t(959),
        r = t(6118);
      function i() {
        let [e, a] = (0, o.useState)(""),
          [t, n] = (0, o.useState)(""),
          [i, l] = (0, o.useState)(""),
          [d, f] = (0, o.useState)(""),
          u = async (c) => {
            if ((c.preventDefault(), !e || !t))
              return l("All fields are required");
            try {
              let c = await fetch(
                "http://localhost:3000/api/addLink",
                {
                  method: "POST",
                  body: JSON.stringify({
                    title: e,
                    content: t,
                  }),
                  headers: {
                    Accept:
                      "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                  },
                }
              );
              (c = await c.json()),
                a(""),
                n(""),
                l(""),
                f("Link added successfully");
            } catch (e) {
              l(e);
            }
          };
        return (0, c.jsxs)(r.Z, {
          children: [
            (0, c.jsxs)("form", {
              onSubmit: u,
              className: "jsx-48f0a29ac99ce554 form",
              children: [
                i
                  ? (0, c.jsx)("div", {
                      className:
                        "jsx-48f0a29ac99ce554 alert-error",
                      children: i,
                    })
                  : null,
                d
                  ? (0, c.jsx)("div", {
                      className:
                        "jsx-48f0a29ac99ce554 alert-message",
                      children: d,
                    })
                  : null,
                (0, c.jsxs)("div", {
                  className:
                    "jsx-48f0a29ac99ce554 form-group",
                  children: [
                    (0, c.jsx)("label", {
                      className: "jsx-48f0a29ac99ce554",
                      children: "Title",
                    }),
                    (0, c.jsx)("input", {
                      type: "text",
                      placeholder: "Title of the link",
                      onChange: (e) => a(e.target.value),
                      value: e,
                      className: "jsx-48f0a29ac99ce554",
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className:
                    "jsx-48f0a29ac99ce554 form-group",
                  children: [
                    (0, c.jsx)("label", {
                      className: "jsx-48f0a29ac99ce554",
                      children: "Content",
                    }),
                    (0, c.jsx)("textarea", {
                      name: "content",
                      placeholder: "Content of the link",
                      value: t,
                      onChange: (e) => n(e.target.value),
                      cols: 20,
                      rows: 8,
                      className: "jsx-48f0a29ac99ce554",
                    }),
                  ],
                }),
                (0, c.jsx)("div", {
                  className:
                    "jsx-48f0a29ac99ce554 form-group",
                  children: (0, c.jsx)("button", {
                    type: "submit",
                    className:
                      "jsx-48f0a29ac99ce554 submit_btn",
                    children: "Add Link",
                  }),
                }),
              ],
            }),
            (0, c.jsx)(s(), {
              id: "48f0a29ac99ce554",
              children:
                '.form.jsx-48f0a29ac99ce554{width:400px;margin:10px auto}.form-group.jsx-48f0a29ac99ce554{width:100%;margin-bottom:10px;display:block}.form-group.jsx-48f0a29ac99ce554 label.jsx-48f0a29ac99ce554{display:block;margin-bottom:10px}.form-group.jsx-48f0a29ac99ce554 input[type="text"].jsx-48f0a29ac99ce554{padding:10px;width:100%}.form-group.jsx-48f0a29ac99ce554 textarea.jsx-48f0a29ac99ce554{padding:10px;width:100%}.alert-error.jsx-48f0a29ac99ce554{width:100%;color:red;margin-bottom:10px}.alert-message.jsx-48f0a29ac99ce554{width:100%;color:green;margin-bottom:10px}',
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
      return e((e.s = 1967));
    }),
      (_N_E = e.O());
  },
]);
