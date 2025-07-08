let a=document.querySelector('button')
a.addEventListener("click",function(){
    alert('N-95 Mask is ordered please check it in your purchase list')
});
var  y=gsap.timeline()
y.from('h1',{
    x:-1500,
    duration:2,
    delay:1
})
y.from('a',{
    y:-1500,
    duration:2,
    stagger:0.2
})
y.from('.icons',{
    x:1500,
    duration:2,
})
y.from('.l1',{
    x:1500,
    duration:2,
})
y.from('.l22',{
    x:1500,
    duration:2,
    rotate:180
})
y.from('img',{
    x:1500,
    duration:2,
})
y.from('.l21 p',{
    x:-1500,
    duration:2,
})
y.from('.l21 button',{
    x:-1500,
    duration:2,
    rotate:360
})
var  x=gsap.timeline()
x.from('h1',{
    x:-1500,
    duration:2
})
x.from('.icons2',{
    y:-1500,
    duration:2,
})
x.from('.l1',{
    x:1500,
    duration:2,
})
x.from('.l22',{
    x:1500,
    duration:2,
    rotate:180
})
x.from('img',{
    x:1500,
    duration:2,
})
x.from('.l21 p',{
    x:-1500,
    duration:2,
})
x.from('.l21 button',{
    x:-1500,
    duration:2,
    rotate:360
})

