// JavaScript Document
$(document).ready(function(){
	$(".btn-toggle").click(function(){
		$("#menu").slideToggle()
	})
	
	$(".dropdown1").click(function(){
		$(".dropdown-menu1").slideToggle()
		$(".dropdown-menu2").slideUp()
	})
		$(".dropdown2").click(function(){
		$(".dropdown-menu2").slideToggle()
		$(".dropdown-menu1").slideUp()
	})
	
})

$('#banner').owlCarousel({
    loop:true,
    margin:10,
	smartSpeed:5000,
 /* autoplay:true,
	autoplayTimeout:5000,*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#testimonial').owlCarousel({
    loop:true,
    margin:50,
	smartSpeed:2000,
	  autoplay:true,
	autoplayTimeout:5000,
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

$('#logo-doitac').owlCarousel({
    loop:true,
    margin:30,
	smartSpeed:2000,
	  autoplay:true,
	autoplayTimeout:5000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
