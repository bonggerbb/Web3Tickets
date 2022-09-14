import gsap from 'gsap'

const navBarAnimations = {
    open() {
        const tl = gsap.timeline({
            defaults: { duration: .5, }
        })
        tl.to('#nav-mobile', { duration: .1, display: 'initial' })
            .to('#nav-mobile', { height: '229px' })
    },
    close() {
        const tl = gsap.timeline({
            defaults: { duration: .5 }
        })
        tl.to('#nav-mobile', { height: '0px' })
            .to('#nav-mobile', { duration: .1, display: 'none' })
    }
}







export { navBarAnimations }