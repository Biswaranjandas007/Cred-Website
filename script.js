let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-2", //target
      start: "0% 50%", // div , start point
      end: "50% 50%", 
    //   markers:true,
      scrub: 1,
    },
  });

tl.to("#imgthree",
{
    bottom:"-5vh",
})
.to("#imgtwo, #imgfour",
{
  bottom:"-10vh",  
})
.to("#imgone, #imgfive",
{
  bottom:"-20vh",  
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-5", //target
    start: "50% 50%", // div , start point
    end: "150% 50%", 
    pin: true,
    // markers:true,
    scrub: 2,
  },
});

tl2.to("#scroll-1",
{
  bottom:"60vh", 
})
.to("#scroll-1",
{
  opacity:0, 
})
.to("#scroll-2",
{
  opacity:1, 
},'smtime')
.to(".phone-img",
{
  x:'-30%', 
},'smtime')
.to("#scroll-2",
{
  bottom:"60vh", 
})
tl2.to("#scroll-1",
{
  bottom:"60vh", 
})
.to("#scroll-2",
{
  opacity:0, 
})
.to("#scroll-3",
{
  opacity:1, 
},'smtime2')
.to(".phone-img",
{
  x:'-59%', 
},'smtime2')
.to("#scroll-3",
{
  bottom:"60vh", 
})
.to("#scroll-3",
{
  opacity:0, 
})
.to("#scroll-4",
{
  opacity:1, 
},'smtime3')
.to(".phone-img",
{
  x:'-88%', 
},'smtime3');


ScrollTrigger.matchMedia({
  // large
  "(min-width: 500px)": function () {
    // setup animations and ScrollTriggers for screens 960px wide or greater...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  },

    // all
    all: function () {
      // ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
    },
  });





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});