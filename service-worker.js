importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
} else {
    console.log(`Workbox gagal dimuat`);
}

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/nav-tak.html', revision: '1' },
    { url: '/quiz.html', revision: '1' },
    { url: '/manifest.json', revision: '1' }, ,
    { url: '/css/styles.css', revision: '1' },
    { url: '/css/main.css', revision: '1' },
    { url: '/css/quiz.css', revision: '1' },
    { url: '/tailwind.css', revision: '1' },
    { url: '/scripts/main.js', revision: '1' },
    { url: '/scripts/data.js', revision: '1' },
    { url: '/scripts/kunci.js', revision: '1' },
    { url: '/scripts/materi.js', revision: '1' },
    { url: '/scripts/nav.js', revision: '1' },
    { url: '/scripts/nav-tak.js', revision: '1' },
    { url: '/images/1.png', revision: '1' },
    { url: '/images/2.jpg', revision: '1' },
    { url: '/images/3.png', revision: '1' },
    { url: '/images/bj-habibie.png', revision: '1' },
    { url: '/images/einstein.png', revision: '1' },
    { url: '/images/evaluasi.png', revision: '1' },
    { url: '/images/icons-happy.png', revision: '1' },
    { url: '/images/Ir Soekarno.png.png', revision: '1' },
    { url: '/DAKSAMATH.png', revision: '1' },
    { url: '/images/ki-hajar-dewantara.png', revision: '1' },
    { url: '/images/materi.png', revision: '1' },
    { url: '/images/middle.png', revision: '1' },
    { url: '/images/petunjuk.png', revision: '1' },
    { url: '/images/petunjuk1.png', revision: '1' },
    { url: '/images/profile.png', revision: '1' },
    { url: '/images/PUSTAKA.png', revision: '1' },
    { url: '/icon/android-icon-96x96.png', revision: '1' },
    { url: '/icon/android-icon-192x192.png', revision: '1' },
    { url: '/icon/apple-icon-76x76.png', revision: '1' },
    { url: '/icon/apple-icon-144x144.png', revision: '1' },
    { url: '/icon/apple-icon-152x152.png', revision: '1' },
    { url: '/icon/apple-icon-180x180.png', revision: '1' },
    { url: '/icon/favicon-96x96.png', revision: '1' },
    { url: '/images/materi/KOMIK-08.png', revision: '1' },
    { url: '/images/materi/KOMIK-09.png', revision: '1' },
    { url: '/images/materi/KOMIK-10.png', revision: '1' },
    { url: '/images/materi/KOMIK-11.png', revision: '1' },
    { url: '/images/materi/KOMIK-12.png', revision: '1' },
    { url: '/images/materi/KOMIK-13.png', revision: '1' },
    { url: '/images/materi/KOMIK-14.png', revision: '1' },
    { url: '/images/materi/KOMIK-15.png', revision: '1' },
    { url: '/images/materi/KOMIK-16.png', revision: '1' },
    { url: '/images/materi/KOMIK-17.png', revision: '1' },
    { url: '/images/materi/KOMIK-18.png', revision: '1' },
    { url: '/images/materi/KOMIK-19.png', revision: '1' },
    { url: '/images/materi/KOMIK-20.png', revision: '1' },
    { url: '/images/materi/KOMIK-21.png', revision: '1' },
    { url: '/images/materi/KOMIK-22.png', revision: '1' },
    { url: '/images/materi/KOMIK-23.png', revision: '1' },
    { url: '/images/materi/KOMIK-24.png', revision: '1' },
    { url: '/images/materi/KOMIK-25.png', revision: '1' },
    { url: '/images/materi/KOMIK-26.png', revision: '1' },
    { url: '/images/materi/KOMIK-27.png', revision: '1' },
    { url: '/images/materi/KOMIK-28.png', revision: '1' },
    { url: '/images/materi/KOMIK-29.png', revision: '1' },
    { url: '/images/materi/KOMIK-30.png', revision: '1' },
    { url: '/images/materi/KOMIK-31.png', revision: '1' },
    { url: '/images/materi/KOMIK-32.png', revision: '1' },
    { url: 'https://unpkg.com/typewriter-effect@latest/dist/core.js', revision: '1' },
    { url: 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.min.css', revision: '1' },
    { url: 'https://cdn.jsdelivr.net/npm/sweetalert2@11', revision: '1' },
], {
    ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
    new RegExp('https://cdn.jsdelivr.net/npm/swiper@9.2.4/modules/scrollbar/scrollbar.min.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'scrollbar',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);
workbox.routing.registerRoute(
    new RegExp('https: //cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'swipercss',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'slide',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'swiper',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'font-awesome',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
                maxEntries: 30,
            }),
        ],
    })
);