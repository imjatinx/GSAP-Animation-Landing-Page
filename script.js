gsap.registerPlugin(ScrollTrigger);

// --- SETUP START ---
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smartphone: {
    smooth: true,
  }
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {

  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });
// --- SETUP END ---

// -------------------------------------------------section-1-2-3--------------------------------------
gsap.to(".t0", {
  scrollTrigger: {
    trigger: ".t0",
    scrub: 3,
    start: "top center",
    end: "top top",
    // id:"wrirk-services",
    // markers:true,
  },
  y: -300,
  duration:1
});

gsap.to(".t1", {
  scrollTrigger: {
    trigger: ".t1",
    scrub: 5,
    start: "top bottom",
    end: "top top",
    // id:"Helps",
    // markers:true,
  }, 
  y: -500
});

gsap.to(".t2", {
  scrollTrigger: {
    trigger: ".t2",
    scrub: 1,
    pin:true,
    start: "top 50%",
    end: "800% top",
    id:"Research-scale",
    markers:true,
  }, 
  scale: 3
});

gsap.to(".t2", {
  scrollTrigger: {
    trigger: ".t2",
    scrub: 1,
    pin:true,
    start: "top 50%",
    end: "800% top",
    id:"Research-pin",
    markers:true,
  }, 
});
// ----------------------------------------section-4------------------------------------------------------

// const animation = gsap.fromTo(".t3", {x:-300},{x:100});

// const animation1 = gsap.fromTo(".t4", {y:600},{y:0});

// const animation2 = gsap.fromTo(".t5", {x:500},{x:0});


const animation = gsap.fromTo(".t3", { x: "-40%" }, { x: "10%" });

const animation1 = gsap.fromTo(".t4", { y: "100%" }, { y: "0%" });

const animation2 = gsap.fromTo(".t5", { x: '99%' }, { x: "25%" });

ScrollTrigger.create({
  trigger: ".t3",
  scrub: true,
  pin: true,
  start: "top top",
  end: "205% top",
  scroller: `#main`,
  animation: animation
});

ScrollTrigger.create({
  trigger: ".t4",
  scrub: true,
  pin: true,
  start: "top top",
  end: "1500% top",
  animation: animation1
});


ScrollTrigger.create({
  trigger: ".t5",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "205% top",
  animation: animation2
});

// ---------------------------------------------------section-5----------------------------------------------------------


const ani = gsap.fromTo(".t6",{x:"-100%",},{x:"10%"});
const ani1 = gsap.fromTo(".t8",{x:"100%"},{x:"0%"});

ScrollTrigger.create({
  trigger: ".t6",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "227% top",
  animation: ani
});

ScrollTrigger.create({
  trigger: ".t7",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "250% top",
  // animation: ani1
});

ScrollTrigger.create({
  trigger: ".t8",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "227% top",
  animation: ani1
});


// -----------------------------------------section-6-------------------image section----------------------------------


const canvas = document.getElementById("d1");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
emoji chan/white emo11.png
emoji chan/white emo12.png
emoji chan/white emo13.png
emoji chan/white emo14.png
emoji chan/white emo15.png
emoji chan/white emo16.png
emoji chan/white emo17.png
emoji chan/white emo18.png
emoji chan/white emo19.png
emoji chan/white emo20.png
emoji chan/white emo21.png
emoji chan/white emo22.png
emoji chan/white emo23.png
emoji chan/white emo24.png
emoji chan/white emo25.png
emoji chan/white emo26.png
emoji chan/white emo27.png
emoji chan/white emo28.png
emoji chan/white emo29.png
emoji chan/white emo30.png
emoji chan/white emo31.png
emoji chan/white emo32.png
emoji chan/white emo33.png
emoji chan/white emo34.png
emoji chan/white emo35.png
emoji chan/white emo36.png
emoji chan/white emo37.png
emoji chan/white emo38.png
emoji chan/white emo39.png
emoji chan/white emo40.png
emoji chan/white emo41.png
emoji chan/white emo42.png
emoji chan/white emo43.png
emoji chan/white emo44.png
emoji chan/white emo45.png
emoji chan/white emo46.png
emoji chan/white emo47.png
emoji chan/white emo48.png
emoji chan/white emo49.png
emoji chan/white emo50.png
emoji chan/white emo51.png
emoji chan/white emo52.png
emoji chan/white emo53.png
emoji chan/white emo54.png
emoji chan/white emo55.png
emoji chan/white emo56.png
emoji chan/white emo57.png
emoji chan/white emo58.png
emoji chan/white emo59.png
emoji chan/white emo60.png
emoji chan/white emo61.png
emoji chan/white emo62.png
emoji chan/white emo63.png
emoji chan/white emo64.png
emoji chan/white emo65.png
emoji chan/white emo66.png
emoji chan/white emo67.png
emoji chan/white emo68.png
emoji chan/white emo69.png
emoji chan/white emo70.png
emoji chan/white emo71.png
emoji chan/white emo72.png
emoji chan/white emo73.png
emoji chan/white emo74.png
emoji chan/white emo75.png
emoji chan/white emo76.png
emoji chan/white emo77.png
emoji chan/white emo78.png
emoji chan/white emo79.png
emoji chan/white emo80.png
emoji chan/white emo81.png
emoji chan/white emo82.png
emoji chan/white emo83.png
emoji chan/white emo84.png
emoji chan/white emo85.png
emoji chan/white emo86.png
emoji chan/white emo87.png
emoji chan/white emo88.png
emoji chan/white emo89.png
emoji chan/white emo90.png
emoji chan/white emo91.png
emoji chan/white emo92.png
 `;
  return data.split("\n")[index];
}

const frameCount = 83;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.section-6>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `200% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({

  trigger: ".section-6>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `400% top`,
  // markers:true
});

gsap.to(".Congrates",{scrollTrigger:
  {
    trigger:".Congrates",
    scrub:true,
    pin:true,
    start:"top 20%",
    end:"2080% top",
    // markers:true
  },opacity:1});

gsap.to(".Congrates1",{scrollTrigger:
  {
    trigger:".Congrates1",
    pin:true,
    start:"top 65%",
    end:"1500% top",
    // markers:true
  }});

// -----------------------------------------------------------------section-7---------------------------------------------

const animation3 = gsap.fromTo(".t9", { x: "-40%" }, { x: "10%" });

const animation4 = gsap.fromTo(".t10", { y: "100%" }, { y: "0%" });

const animation5 = gsap.fromTo(".t11", { x: '99%' }, { x: "25%" });

ScrollTrigger.create({
  trigger: ".t9",
  scrub: true,
  pin: true,
  start: "top top",
  end: "205% top",
  scroller: `#main`,
  animation: animation3
});

ScrollTrigger.create({
  trigger: ".t10",
  scrub: true,
  pin: true,
  start: "top top",
  end: "1500% top",
  animation: animation4
});

ScrollTrigger.create({
  trigger: ".t11",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "205% top",
  animation: animation5
});

// ----------------------------------------------------------------section-8------------------------------------------------------


const ani2 = gsap.fromTo(".t12",{x:"-100%",},{x:"10%"});
const ani3 = gsap.fromTo(".t14",{x:"100%"},{x:"0%"});

ScrollTrigger.create({
  trigger: ".t12",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "227% top",
  animation: ani2
});

ScrollTrigger.create({
  trigger: ".t13",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "250% top",
  // animation: ani1
});

ScrollTrigger.create({
  trigger: ".t14",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "227% top",
  animation: ani3
});

// ------------------------------------------------------------------------section-9-------------------------------------------------

const canvas1 = document.getElementById("d2");
const context1 = canvas1.getContext("2d");

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  render1();
});

function files1(index) {
  var data = `
  pencil/emoji cap00.png
  pencil/emoji cap01.png
  pencil/emoji cap02.png
  pencil/emoji cap03.png
  pencil/emoji cap04.png
  pencil/emoji cap05.png
  pencil/emoji cap06.png
  pencil/emoji cap07.png
  pencil/emoji cap08.png
  pencil/emoji cap09.png
  pencil/emoji cap10.png
  pencil/emoji cap11.png
  pencil/emoji cap12.png
  pencil/emoji cap13.png
  pencil/emoji cap14.png
  pencil/emoji cap15.png
  pencil/emoji cap16.png
  pencil/emoji cap17.png
  pencil/emoji cap18.png
  pencil/emoji cap19.png
  pencil/emoji cap20.png
  pencil/emoji cap21.png
  pencil/emoji cap22.png
  pencil/emoji cap23.png
  pencil/emoji cap24.png
  pencil/emoji cap25.png
  pencil/emoji cap26.png
  pencil/emoji cap27.png
  pencil/emoji cap28.png
  pencil/emoji cap29.png
  pencil/emoji cap30.png
  pencil/emoji cap31.png
  pencil/emoji cap32.png
  pencil/emoji cap33.png
  pencil/emoji cap34.png
  pencil/emoji cap35.png
  pencil/emoji cap36.png
  pencil/emoji cap37.png
  pencil/emoji cap38.png
  pencil/emoji cap39.png
  pencil/emoji cap40.png
  pencil/emoji cap41.png
  pencil/emoji cap42.png
  pencil/emoji cap43.png
  pencil/emoji cap44.png
  pencil/emoji cap45.png
  pencil/emoji cap46.png
  pencil/emoji cap47.png
  pencil/emoji cap48.png
  pencil/emoji cap49.png
  

 `;
  return data.split("\n")[index];
}

const frameCount1 = 51;

const images1 = [];
const imageSeq1 = {
  frame: 1,
};

for (let i = 0; i < frameCount1; i++) {
  const img = new Image();
  img.src = files1(i);
  images1.push(img);
}

gsap.to(imageSeq1, {
  frame: frameCount1 - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.section-9>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `200% top`,
    scroller: `#main`,
  },
  onUpdate: render1,
});

images1[1].onload = render1;

function render1() {
  scaleImage(images1[imageSeq1.frame], context1);
}

ScrollTrigger.create({

  trigger: ".section-9>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `400% top`,
  // markers:true,
});

gsap.to(".Congrates2",{scrollTrigger:
  {
    trigger:".Congrates2",
    pin:true,
    start:"top 69%",
    end:"1500% top",
    // markers:true
  }});

// --------------------------------------------------------------section-10--------------------------------------------------------  
const animation6 = gsap.fromTo(".t15", { x: "-40%" }, { x: "10%" });

const animation7 = gsap.fromTo(".t16", { y: "100%" }, { y: "0%" });

const animation8 = gsap.fromTo(".t17", { x: '99%' }, { x: "25%" });

ScrollTrigger.create({
  trigger: ".t15",
  scrub: true,
  pin: true,
  start: "top top",
  end: "205% top",
  scroller: `#main`,
  animation: animation6
});

ScrollTrigger.create({
  trigger: ".t16",
  scrub: true,
  pin: true,
  start: "top top",
  end: "1500% top",
  animation: animation7
});

ScrollTrigger.create({
  trigger: ".t17",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "205% top",
  animation: animation8
});

// -----------------------------------------------------------------section-11-------------------------------------------------------
const ani4 = gsap.fromTo(".t18",{x:"-100%",},{x:"10%"});
const ani5 = gsap.fromTo(".t20",{x:"100%"},{x:"0%"});

ScrollTrigger.create({
  trigger: ".t18",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "227% top",
  animation: ani4
});

ScrollTrigger.create({
  trigger: ".t19",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "250% top",
  // animation: ani1
});

ScrollTrigger.create({
  trigger: ".t20",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "227% top",
  animation: ani5
});

// -----------------------------------------------------------section-12----Image-Phase-III-----------------------------------------

const canvas2 = document.getElementById("d3");
const context2 = canvas2.getContext("2d");

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  render2();
});

function files2(index) {
  var data = `
tick/t00.png
tick/t01.png
tick/t02.png
tick/t03.png
tick/t04.png
tick/t05.png
tick/t06.png
tick/t07.png
tick/t08.png
tick/t09.png
tick/t10.png
tick/t11.png
tick/t12.png
tick/t13.png
tick/t14.png
tick/t15.png
tick/t16.png
tick/t17.png
tick/t18.png
tick/t19.png
tick/t20.png
tick/t21.png
tick/t22.png
tick/t23.png
tick/t24.png
tick/t25.png
tick/t26.png
tick/t27.png
tick/t28.png
tick/t29.png
tick/t30.png
tick/t31.png
tick/t32.png
tick/t33.png
tick/t34.png
tick/t35.png
tick/t36.png
tick/t37.png
tick/t38.png
tick/t39.png
tick/t40.png
tick/t41.png
tick/t42.png
tick/t43.png
tick/t44.png
tick/t45.png
tick/t46.png
tick/t47.png
tick/t48.png
tick/t49.png
tick/t50.png  
tick/t51.png
tick/t52.png
tick/t53.png
tick/t54.png
tick/t55.png
tick/t56.png
tick/t57.png
tick/t58.png
tick/t59.png
tick/t60.png
tick/t61.png
tick/t62.png
tick/t63.png
tick/t64.png
 `;
  return data.split("\n")[index];
}

const frameCount2 = 66;

const images2 = [];
const imageSeq2 = {
  frame: 1,
};

for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  img.src = files2(i);
  images2.push(img);
}

gsap.to(imageSeq2, {
  frame: frameCount2 - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.section-12>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `200% top`,
    scroller: `#main`,
  },
  onUpdate: render2,
});

images2[1].onload = render2;

function render2() {
  scaleImage(images2[imageSeq2.frame], context2);
}

ScrollTrigger.create({

  trigger: ".section-12>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `300% top`,
});

gsap.to(".Congrates3",{scrollTrigger:
  {
    trigger:".Congrates3",
    pin:true,
    start:"top 50%",
    end:"500% top",
    // markers:true
  }});

// ---------------------------------------------------------------------section-13---------------------------------------------------  

const animation9 = gsap.fromTo(".t21", { x: "-40%" }, { x: "10%" });

const animation10 = gsap.fromTo(".t22", { y: "100%" }, { y: "0%" });

const animation11 = gsap.fromTo(".t23", { x: '99%' }, { x: "25%" });

ScrollTrigger.create({
  trigger: ".t21",
  scrub: true,
  pin: true,
  start: "top top",
  end: "205% top",
  scroller: `#main`,
  animation: animation9
});

ScrollTrigger.create({
  trigger: ".t22",
  scrub: true,
  pin: true,
  start: "top top",
  end: "1500% top",
  animation: animation10
});

ScrollTrigger.create({
  trigger: ".t23",
  scrub: true,
  scroller: `#main`,
  pin: true,
  start: "top top",
  end: "205% top",
  animation: animation11
});

// ----------------------------------------------------------------section-14-------------------------------------------------------


