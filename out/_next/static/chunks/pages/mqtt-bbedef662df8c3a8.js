(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [100],
  {
    9696: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/mqtt",
        function () {
          return t(6480);
        },
      ]);
    },
    6480: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return o;
          },
        });
      var r = t(1527),
        c = t(959),
        s = t(8083),
        i = t.n(s),
        u = function (n) {
          let {
              uri: e,
              options: t = {},
              topicHandlers: r = [
                {
                  topic: "",
                  handler: (n) => {
                    let {
                      topic: e,
                      payload: t,
                      packet: r,
                    } = n;
                  },
                },
              ],
              onConnectedHandler: s = (n) => {},
            } = n,
            u = (0, c.useRef)(null);
          (0, c.useEffect)(() => {
            if (u.current) return;
            if (!r || 0 === r.length) return () => {};
            try {
              u.current = t
                ? i().connect(e, t)
                : i().connect(e);
            } catch (n) {
              console.error("error", n);
            }
            let n = u.current;
            return (
              r.forEach((e) => {
                null == n || n.subscribe(e.topic);
              }),
              null == n ||
                n.on("message", (n, e, t) => {
                  let c;
                  let s = r.find((e) => e.topic === n);
                  try {
                    c = JSON.parse(e);
                  } catch (n) {
                    c = e;
                  }
                  s &&
                    s.handler({
                      topic: n,
                      payload: c,
                      packet: t,
                    });
                }),
              null == n ||
                n.on("connect", () => {
                  s && s(n);
                }),
              () => {
                n &&
                  (r.forEach((e) => {
                    n.unsubscribe(e.topic);
                  }),
                  n.end());
              }
            );
          }, [s, t, r, e]);
        };
      function o() {
        let [n, e] = (0, c.useState)([]),
          t = (n) => {
            e((e) => [...e, n]);
          },
          s = () => {
            e(() => []);
          },
          i = (0, c.useRef)([
            {
              topic: "next",
              handler: (n) => {
                t(n);
              },
            },
          ]),
          o = (0, c.useRef)(null),
          l = (n) => {
            o.current = n;
          };
        u({
          uri: "tcp://casa.suarez-ramirez.com:1884",
          options: {
            username: "next",
            password: "next",
            clientId: "next",
          },
          topicHandlers: i.current,
          onConnectedHandler: (n) => l(n),
        });
        let a = (n) => {
          if (!n) {
            console.log(
              "(publishMessages) Cannot publish, mqttClient: ",
              n
            );
            return;
          }
          n.publish("next", "1st message from component");
        };
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("h2", {
              children: "Subscribed Topics",
            }),
            i.current.map((n) =>
              (0, r.jsx)(
                "p",
                { children: n.topic },
                Math.random()
              )
            ),
            (0, r.jsx)("h2", {
              children: "Incomming Messages:",
            }),
            n.map((n) =>
              (0, r.jsxs)(
                "div",
                {
                  children: [
                    (0, r.jsx)("p", {
                      children: n.payload.toString(),
                    }),
                    (0, r.jsx)("p", {
                      children: JSON.stringify(n),
                    }),
                  ],
                },
                Math.random()
              )
            ),
            (0, r.jsx)("button", {
              onClick: () => a(o.current),
              children: "Publish Test Messages",
            }),
            (0, r.jsx)("button", {
              onClick: () => s(),
              children: "Clear Test Messages",
            }),
          ],
        });
      }
    },
    5842: function () {},
    5019: function () {},
    8941: function () {},
    4504: function () {},
  },
  function (n) {
    n.O(0, [83, 774, 888, 179], function () {
      return n((n.s = 9696));
    }),
      (_N_E = n.O());
  },
]);
