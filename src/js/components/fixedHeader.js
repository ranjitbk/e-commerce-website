// initialize fixed blocks on scroll
export default function initFixedHeader() {
    var previousScrollPosition = window.pageYOffset;
    var page = document.querySelector('.wrapper');
    var pageHead = document.querySelector('.header');
    var headerHeight = null

    document.addEventListener('scroll', () => {
        var currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > 0) {
            pageHead.setAttribute('data-scroll', (currentScrollPosition < previousScrollPosition ? 'up' : 'down'));
        }
        if (currentScrollPosition < 1) {
            pageHead.removeAttribute('data-scroll');
        }
        previousScrollPosition = currentScrollPosition;
    });

    const initHeaderHeight = () => {
        headerHeight = pageHead.clientHeight
        document.documentElement.style.setProperty('--header-height', headerHeight + "px");
    }

    document.addEventListener('load', initHeaderHeight())
    window.addEventListener('resize', () => {
        initHeaderHeight()
        initHeaderHeight()
    })
}