(function () {
    var isFirstBatch = true;
    var firstBatchIndex = 0;

    var observer = new IntersectionObserver(function (entries) {
        var batchDelay = 0;
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            // Initially visible elements stagger by index; scroll-triggered
            // elements stagger within their incoming batch.
            var delay = isFirstBatch ? firstBatchIndex++ * 80 : batchDelay;
            batchDelay += 60;
            setTimeout(function () {
                el.classList.add('in-view');
            }, delay);
            observer.unobserve(el);
        });
        isFirstBatch = false;
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    function init() {
        document.querySelectorAll(
            '.card-grid .nav-card, .server-grid .server-card, .video-grid .video-card, ' +
            '.faq-list .question, .downloader-card, .dev-card-row .dev-card'
        ).forEach(function (el) {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
