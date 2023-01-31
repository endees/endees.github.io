$('#firstOwl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$('#secondOwl').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots: false,
    autoplay: 1000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:6
        }
    }
})

