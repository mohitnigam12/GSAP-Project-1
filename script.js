var tl = gsap.timeline()

tl.from("h3",{
  y:-30,
  opacity:0,
  duration:0.8,
  delay:0.3,
  stagger:0.3
})
tl.from("h1",{
    x:-600,
    opacity:0,
    duration:1,
    stagger:0.33
})
tl.from("img",{
    x:1000,
    rotate:150,
    duration:1,
    stagger:0.33,
    opacity:0
})
tl.from("h4",{
    y:150,
    duration:0.6,
    stagger:0.2,
    opacity:0
})
tl.to("#arrow",{
    y:-30,
    opacity:1,
    duration:0.5,
    repeat:-1,
    yoyo:true

})