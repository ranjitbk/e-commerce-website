import inView from "in-view"

export default function initViewport() {
    let viewport = () => {
        const offset = window.innerHeight * 0.4

        inView('.view-item')
            .on('enter', el => {
                el.classList.add('in-view')
            })
        inView.offset(offset);

    }

    window.addEventListener('resize', viewport)
    window.addEventListener('load', viewport)
}