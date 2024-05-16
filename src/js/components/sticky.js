export default function initStickyScrollBlock() {
    const elements = document.querySelectorAll('[data-sticky]')

    if (elements) {
        for (const element of elements) {
            const start = element.getBoundingClientRect().top - 100
            const end = start + element.parentElement.clientHeight - window.innerHeight

            if (window.matchMedia("(min-width: 768px)").matches) {
                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;

                    if (scrolled > start && scrolled < end) {
                        const coords = (scrolled - start) + 'px'
                        element.style.transform = 'translateY(' + coords + ')';
                    }
                })
            }
        }
    }

}