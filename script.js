
//timeline

const tl = gsap.timeline();
tl.from(".heroTitle span", {
    opacity: 0,
    stagger: 0.09,
    duration: 0.5
})

tl.from(".heroContent", {
    opacity: 0
})

tl.from("#video", {
    opacity: 0
})

tl.from(".heroLink a", {
    opacity: 0,
    y: 50,
    stagger: 0.09
})

// Scroll trigger movements

gsap.registerPlugin(ScrollTrigger);

gsap.to("#navbar", {
    boxShadow: "0 0 7px #64748b",
    scrollTrigger: {
        trigger: "#navbar",
        markers: false,
        start: "bottom top",
        end: "bottom top",
        scrub: 1
    }
})


gsap.from("#enterpriseImg div", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger:"#enterpriseImg",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.from("#ceo", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger:"#ceo",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.from("#ceoDetails h3", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger:"#ceoDetails",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.to("#productImg", {
    y: -100,
    // overflow: "hidden",
    scrollTrigger: {
        trigger: "#productImg",
        markers: false,
        start: "top 30%",
        end: "top top",
        scrub: 1
    }
})


gsap.from("#productContent", {
    y: 50,
    scrollTrigger: {
        trigger: "#productContent",
        markers: false,
        start: "top 50%",
        end: "top 10%",
        scrub: 1
    }
})



gsap.from("#caseStudy div", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger:"#caseStudy",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.from("#partnerImg", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#partnerImg",
        markers: false,
        start: "top 80%",
        end: "20% 40%",
        scrub: 1
    }
})

gsap.from("#books div", {
    opacity: 0,
    y: 100,
    stagger: 0.05,
    scrollTrigger: {
        trigger: "#books",
        markers: false,
        start: "top 80%",
        end: "top 50%",
        scrub: 1
    }
})