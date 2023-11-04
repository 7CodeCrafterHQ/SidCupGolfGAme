var cursor = document.querySelector("#cursor")
var cursorblur = document.querySelector("#cursor-blur")
var h4all = document.querySelectorAll("nav h4 ")
h4all.forEach(function (elem) {
   elem.addEventListener("mouseenter", function(){
      cursor.style.scale = 3
      cursor.style.border = "1px solid #fff"
      cursor.style.backgroundColor = "transparent"
   } )
   h4all.forEach(function (elem) {
      elem.addEventListener("mouseleave", function(){
         cursor.style.scale = 1
         cursor.style.border = "1px solid #8bb916"
         cursor.style.backgroundColor = "#8bb916"
      } )

})

})
document.addEventListener("mousemove", function (dets) {

   cursor.style.left = dets.x + 5+ "px"
   cursor.style.top = dets.y + 5+ "px"
   cursorblur.style.left = dets.x - 130 + "px"
   cursorblur.style.top = dets.y - 140 + "px"

})


gsap.to("nav", {
   backgroundColor: "#000",
   height: "14vh",
   duration: 0.5,
   scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      //  markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1
   }
})

gsap.to("#main", {
   backgroundColor: "#000",
   scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers:true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2
   }
})
gsap.from("#about-us img, #aboutus-in",{
   y:50,
   opacity:0,
   duration: 1,
   stagger : 0.4,
   scrollTrigger:{
      trigger:"#about-us",
      scroller : "body",
      
      start:"top 60%",
      end:"top 65%",
      scrub:3
   }
})
gsap.from("#page3 .card",{
     scale:0.8,
   opacity:0,
   duration: 1,
   stagger : 0.4,
   scrollTrigger:{
      trigger:".card",
      scroller : "body",
      start:"top 70%",
      end:"top 65%",
      scrub:1,
      

   }
})
gsap.from("#page5 #colon1",{
   y:-70,
   x:-70,
   scrollTrigger:{
      trigger:"#colon1",
     scroller: "body",
     
     start:"top 50%",
     end:"top 47%",
     scrub:4
   
   }

})
gsap.from("#page5 #colon2",{
   y:-70,
   x:-70,
   scrollTrigger:{
      trigger:"#colon1",
     scroller: "body",
   
     start:"top 55%",
     end:"top 45%",
     scrub:4
   
   }
})

gsap.from("#page6 h1",{
   y:50,
   scrollTrigger:{
      trigger:"#page4 h1",
     scroller: "body",
   
     start:"top 55%",
     end:"top 45%",
     scrub:4
   
   }

})