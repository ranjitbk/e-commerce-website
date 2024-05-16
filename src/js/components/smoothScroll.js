export default function initSmoothScroll() {
    const item = document.querySelectorAll('.smooth-scroll')
    const offset = 100

    let smoothScroll = () => {
        item.forEach((p) => {
            const target = p.getAttribute('href')
            const scrollTarget = document.querySelector(target)
            const position = window.pageYOffset + scrollTarget.getBoundingClientRect().top - offset

            p.addEventListener('click', (e) => {
                e.preventDefault()

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });
            })
        })
    }


    window.addEventListener('load', smoothScroll)
    window.addEventListener('resize', smoothScroll)
}