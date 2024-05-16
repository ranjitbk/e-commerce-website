export default function initIframeLightbox() {
    const initIframe = () => {
        const holder = document.querySelector('.iframe-holder')

        if (holder) {
            const play = document.querySelectorAll('[data-iframe]')
            const wrapper = document.querySelector('.iframe-wrapper')
            const activeClass = 'iframe-active'
            const close = holder.querySelector('.iframe-close')
            const body = document.body
            const overflowClass = 'lightbox-active'
            const video = wrapper.querySelector('video source')

            let clearHolder = () => {
                wrapper.innerHTML = ''
                body.classList.remove(overflowClass)
            }

            play.forEach((p) => {
                p.addEventListener('click', (e) => {
                    const src = p.getAttribute('href')
                    e.preventDefault()
                    holder.classList.add(activeClass)
                    body.classList.add(overflowClass)

                    wrapper.innerHTML = '<video width="320" height="240" controls playsinline><source src="' + src + '" type ="video/mp4" > </video> ';
                    const video = wrapper.querySelector('video');
                    video.play()

                    document.addEventListener('keyup', (e) => {
                        if (e.keyCode == 27) {
                            clearHolder()
                            holder.classList.remove(activeClass)
                        }
                    })
                })
            })

            close.addEventListener('click', (e) => {
                clearHolder()
                holder.classList.remove(activeClass)
            })
        }
    }

    initIframe()
}