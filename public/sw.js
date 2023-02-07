if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n),
            (e.onload = s),
            document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e)
          throw new Error(
            `Module ${n} didn’t register its module`
          );
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ("document" in self
        ? document.currentScript.src
        : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => n(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(a.map((e) => r[e] || o(e))).then(
      (e) => (i(...e), t)
    );
  };
}
define(["./workbox-7028bf80"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/83-49a85fe514c1be97.js",
          revision: "49a85fe514c1be97",
        },
        {
          url: "/_next/static/chunks/framework-ac88a2a245aea9ab.js",
          revision: "ac88a2a245aea9ab",
        },
        {
          url: "/_next/static/chunks/main-40a1e901664f990b.js",
          revision: "40a1e901664f990b",
        },
        {
          url: "/_next/static/chunks/pages/_app-74470bccfd6fba53.js",
          revision: "74470bccfd6fba53",
        },
        {
          url: "/_next/static/chunks/pages/_error-e771fbcb2920b932.js",
          revision: "e771fbcb2920b932",
        },
        {
          url: "/_next/static/chunks/pages/about-7a8da8aa6853e5bf.js",
          revision: "7a8da8aa6853e5bf",
        },
        {
          url: "/_next/static/chunks/pages/index-698667afe22229b7.js",
          revision: "698667afe22229b7",
        },
        {
          url: "/_next/static/chunks/pages/links-0b2476a64d137b8f.js",
          revision: "0b2476a64d137b8f",
        },
        {
          url: "/_next/static/chunks/pages/links/%5Bid%5D-bc3eb13a5d63d972.js",
          revision: "bc3eb13a5d63d972",
        },
        {
          url: "/_next/static/chunks/pages/mqtt-d2e4c312cbbe356f.js",
          revision: "d2e4c312cbbe356f",
        },
        {
          url: "/_next/static/chunks/pages/no-js-form-63916d432cca7047.js",
          revision: "63916d432cca7047",
        },
        {
          url: "/_next/static/chunks/pages/post/%5Bid%5D-9905d76b607fabed.js",
          revision: "9905d76b607fabed",
        },
        {
          url: "/_next/static/chunks/pages/post/%5Bid%5D/%5Bcomment%5D-2f857153caa078a6.js",
          revision: "2f857153caa078a6",
        },
        {
          url: "/_next/static/chunks/pages/showLinks-9d7af3fe9484c859.js",
          revision: "9d7af3fe9484c859",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-87b3a303122f2f0d.js",
          revision: "87b3a303122f2f0d",
        },
        {
          url: "/_next/static/css/3047489bb83c9284.css",
          revision: "3047489bb83c9284",
        },
        {
          url: "/_next/static/css/69b1eddbcd4ab96d.css",
          revision: "69b1eddbcd4ab96d",
        },
        {
          url: "/_next/static/css/e0c33ce2220bb674.css",
          revision: "e0c33ce2220bb674",
        },
        {
          url: "/_next/static/tJMQDL-3NtzJLfliKeqaL/_buildManifest.js",
          revision: "6dbf0f4d31090c6a02508fd72789de9a",
        },
        {
          url: "/_next/static/tJMQDL-3NtzJLfliKeqaL/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/favicon.ico",
          revision: "c30c7d42707a47a3f4591831641e50dc",
        },
        {
          url: "/icons/icon-128x128.png",
          revision: "d626cfe7c65e6e5403bcbb9d13aa5053",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "e53a506b62999dc7a4f8b7222f8c5add",
        },
        {
          url: "/icons/icon-152x152.png",
          revision: "18b3958440703a9ecd3c246a0f3f7c72",
        },
        {
          url: "/icons/icon-16x16.png",
          revision: "83703514f19796ee15151e450984416d",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "27dc12f66697a47b6a8b3ee25ba96257",
        },
        {
          url: "/icons/icon-32x32.png",
          revision: "25e2c6ee34840568012b32e4314278df",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "a40324a3fde2b0b26eeffd4f08bf8be8",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "93d6e8e15cfa78dfee55446f607d9a28",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "f2ffc41b3482888f3ae614e0dd2f6980",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "fba02a40f7ba6fc65be8a2f245480f6d",
        },
        {
          url: "/images/titas.jpg",
          revision: "bac75ee2e0430bfdccd6f86b84c3a1f0",
        },
        {
          url: "/images/yeiyei.jpg",
          revision: "896e0a4be42cc3da0e00a4a6b8b9b454",
        },
        {
          url: "/manifest.json",
          revision: "a7400036a0de88605834611ce186ba8f",
        },
        {
          url: "/next.svg",
          revision: "8e061864f388b47f33a1c3780831193e",
        },
        {
          url: "/thirteen.svg",
          revision: "53f96b8290673ef9d2895908e69b2f92",
        },
        {
          url: "/vercel.svg",
          revision: "61c6b19abff40ea7acd577be818f3976",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return (
          !s.startsWith("/api/auth/") &&
          !!s.startsWith("/api/")
        );
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600,
          }),
        ],
      }),
      "GET"
    );
});
