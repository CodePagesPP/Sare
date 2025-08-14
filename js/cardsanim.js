gsap.registerPlugin(ScrollTrigger);

gsap.to(".service1", {
    scrollTrigger: {
        trigger: ".service1",
        scrub: true,
        markers:true
    },
    y:-500,
    duration: 1
})

gsap.to(".service2", {
    scrollTrigger: {
        trigger: ".service1",
        scrub: true
    },
    y:-500,
    duration: 10
})

gsap.to(".service3", {
    scrollTrigger: {
        trigger: ".service2",
        scrub: true,
        start:end
    },
    y:-500,
    duration: 10
})