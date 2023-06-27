var tl = gsap.timeline()

tl.to("#root",{
    y:"100vh",
    scale:0.6,
    duration:0
})

tl.to("#root",{
    y:"30vh",
    duration:1,  
    delay:1
})
tl.to("#root",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})