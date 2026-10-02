(function () {
    'use strict';

    var ROUTES = {
        home: { fr: 'index.html', en: 'en/index.html' },
        isolation: { fr: 'gaine-isolation.html', en: 'en/insulation-sleeve.html' },
        custom: { fr: 'gaine-sur-mesure.html', en: 'en/custom-sleeves.html' },
        about: { fr: 'a-propos.html', en: 'en/about.html' },
        contact: { fr: 'contact.html', en: 'en/contact.html' },
        quote: { fr: 'demande-soumission.html', en: 'en/quote.html' },
        estimate: { fr: 'demande-devis.html', en: 'en/estimate.html' }
    };

    var SLUGS = {
        'index.html': 'home',
        'gaine-isolation.html': 'isolation',
        'insulation-sleeve.html': 'isolation',
        'gaine-sur-mesure.html': 'custom',
        'custom-sleeves.html': 'custom',
        'a-propos.html': 'about',
        'about.html': 'about',
        'contact.html': 'contact',
        'demande-soumission.html': 'quote',
        'quote.html': 'quote',
        'demande-devis.html': 'estimate',
        'estimate.html': 'estimate',
        'applications.html': 'isolation',
        'tarifs-au-volume.html': 'quote',
        'volume-pricing.html': 'quote'
    };

    function inEnDir() {
        return /\/en(\/|$)/.test(window.location.pathname);
    }

    function currentLang() {
        return inEnDir() ? 'en' : 'fr';
    }

    function getSlug() {
        var name = window.location.pathname.split('/').pop() || 'index.html';
        return SLUGS[name] || 'home';
    }

    function routeUrl(lang) {
        var slug = getSlug();
        var target = ROUTES[slug][lang];
        if (lang === 'en' && inEnDir()) {
            return target.indexOf('en/') === 0 ? target.slice(3) : target;
        }
        if (lang === 'fr' && inEnDir()) {
            return '../' + ROUTES[slug].fr;
        }
        return target;
    }

    function markActiveToggle() {
        var lang = currentLang();
        document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
            var isActive = btn.getAttribute('data-lang-switch') === lang;
            btn.setAttribute('aria-current', isActive ? 'true' : 'false');
            btn.classList.toggle('lang-active', isActive);
        });
    }

    function initToggle() {
        document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
            btn.setAttribute('href', routeUrl(btn.getAttribute('data-lang-switch')));
        });
        markActiveToggle();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initToggle);
    } else {
        initToggle();
    }
})();
