const tl = gsap.timeline();
gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
});

gsap.to("#box2", {
  x: 1000, //moment on x-vertical or y-horizontal line
  duration: 2, //animation time
  delay: 1,
  rotate: 360,
  backgroundColor: "pink",
  borderRadius: "50%",
  scale: 1.5, //change size
});

gsap.from("h1", {
  // fontSize: "20px",
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 1, //moment of selected same elements(h1 in this case) one after another. in sequence. look up for more inputs
  repeat: -1, // -1 continue repeat, else 1, 2, 3 and so on as need
  yoyo: true,
});

gsap.from("#img", {
  x: 100,
  y: -500,
  opacity: 0,
  borderRadius: "50%",
  duration: 2,
  delay: 1,
});

//timeline in gsap
// instead of const tl= gsap.timeline, could also do gsap.timeline.to("#box3", {})

tl.to("#box3", {
  x: 1000,
  borderRadius: "50%",
  rotate: 360,
  duration: 3,
  repeat: -1,
  yoyo: true,
});

tl.to("#box4", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
});

tl.to("#box5", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
});
