function scroller(){
    const scroller = new LocomotiveScroll({
        el: document.querySelector('#loader'),
        smooth: true
    })
    gsap.registerPlugin(ScrollTrigger)
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy('#loader', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    ScrollTrigger.refresh()
}
// scroller();


function split(){
    function h1split1() {
        var clutter;
        document.querySelectorAll(".split1").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split("").forEach(function(char){
                clutter += `<span>${char}</span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    h1split1();
    function h1split2(){
        var clutter;
        document.querySelectorAll(".split2").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split(" ").forEach(function(char){
                clutter += `<span> ${char} </span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    h1split2();
}
split();





function loader(){
    function revealToLoader(){
        document.querySelectorAll(".reveal").forEach(function(elem){
            let spanParent = document.createElement("span");
            let spanChild = document.createElement("span");
    
            spanParent.classList.add("parent");
            spanChild.classList.add("child");
    
            spanChild.innerHTML = elem.innerHTML;
            spanParent.appendChild(spanChild);
    
            elem.innerHTML = "";
            elem.appendChild(spanParent);
    
        })
    }
    revealToLoader();
    
    
    var time=gsap.timeline();
    time
    .from(".child #a2",{
        x:200,
        duration:1.4,
        delay:0.5,
        stagger:.2,
        ease:"Power3.easeInOut",
        opacity:0
    })
    .to(".parent .child",{
        y:"-110%",
        duration:1,
        ease:"Circ.easeInOut"
    })
    .to("#one",{
        height:0,
        duration:1,
        ease:"Expo.easeInOut"
    })
    .to("#hara",{
        height:"100vh",
        duration:1,
        delay:-1.6,
        ease:"Expo.easeInOut"
    })
    .to("#home",{
        height:"100vh",
        duration:1,
        delay:-1.4,
        ease:"Expo.easeInOut"
    })
    .from("#home #page1 #head .textAnimation ",{
        y:"100%",
        opacity:0,
        duration:1,
        delay:-1,
        ease:"Power3.easeInOut",
    })
}
loader();


function homeTextAnimation(){
    function revealToHomeText(){
        document.querySelectorAll(".textAnimation").forEach(function(elem){
            let spanParent = document.createElement("span");
            let spanChild = document.createElement("span");
    
            spanParent.classList.add("parent");
            spanChild.classList.add("child");
    
            spanChild.innerHTML = elem.innerHTML;
            spanParent.appendChild(spanChild);
    
            elem.innerHTML = "";
            elem.appendChild(spanParent);
    
        })
    }
    revealToHomeText();
    var time=gsap.timeline();
    time.to(".parent .child",{
        top:"-10%",
        duration:1,
        ease:"Circ.easeInOut"
    })
}
homeTextAnimation()

