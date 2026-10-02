(function () {
    'use strict';

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    var params = new URLSearchParams(window.location.search);
    if (params.get('merci') === '1') {
        var note = document.getElementById('merci');
        if (note) note.classList.remove('hidden');
    }

    function syncCustomFields() {
        document.querySelectorAll('input[type="radio"][data-shows]').forEach(function (radio) {
            var target = document.getElementById(radio.getAttribute('data-shows'));
            if (!target) return;
            var show = radio.checked;
            target.classList.toggle('hidden', !show);
            target.required = show && target.hasAttribute('data-required-when-shown');
            if (!show) target.value = '';
        });
    }

    document.querySelectorAll('input[type="radio"][data-shows]').forEach(function (radio) {
        radio.addEventListener('change', syncCustomFields);
    });
    syncCustomFields();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var nodes = document.querySelectorAll('[data-anim]');
    if (!('IntersectionObserver' in window)) {
        nodes.forEach(function (node) { node.classList.add('is-in'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.2 });
    nodes.forEach(function (node) { observer.observe(node); });
})();
