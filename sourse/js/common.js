var btnToggle = $(".toggle-menu-mobile--js")
menu = $(".menu-mobile--js")
JSCCommon = { 
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
 
	},
// /mobileMenu
  

}; 
jQuery(document).ready(function ($) { 
	JSCCommon.mobileMenu(); 
function peopleColor() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(".s-problems").offset().top) {
			var icon = $(".s-problems__item:first-child .icon-people")
			for (var i = 0; i < icon.length; i++) {
				// setTimeout(function() {
					// console.log(i)
				   $('.s-problems__item:first-child .icon-people:nth-child('+(7 + i)+' )').addClass('text-warning')
					
				// }(i),  1000);
			} 
			
			var icon2 = $(".s-problems__item:nth-child(2) .icon-people")
			for (var i = 0; i < icon2.length; i++) {
				// setTimeout(function() {
					// console.log(i)
				 $('.s-problems__item:nth-child(2) .icon-people:nth-child('+(3 + i)+' )').addClass('text-warning')
					
				// }(i),  1000);
			} 

			
		} 
	});
}

peopleColor()
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//
 

		// скрывает моб меню
		var topH = $("header ").innerHeight();
		
		$(window).scroll(function () {
			
		});
		// конец добавил
		$(".main-wrapper").css("paddingBottom", $('.footer').height());
		if (window.matchMedia("(min-width: 768px)").matches) {
			
			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}



	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	$(" .menu-item a , .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });



 
	// modal window

 
	$(".header").stick_in_parent({
		parent: 'body',
		// // recalc_every: 1,
		//  recalc_every: true,
	});

	// задерка при анимации
	function delayItem(li, cl) {

		var li = $(li) 
		li.addClass('wow ' + cl).attr('data-wow-duration',"1s") 
		for (var i = 0 ; i <= li.length; i++) { 
			li.eq(i).attr("data-wow-delay", i*.1 + "s");
		}
	}
	delayItem(".s-symptoms ul li", "fadeInUp")
	delayItem(".s-diagnostics ul li", "fadeInLeft")
	delayItem(".s-approaches *", "fadeInUp")
	delayItem(".s-testimony img", "fadeInUp")
	// delayItem(".s-testimony h3", "fadeInUp")
	delayItem(".s-testimony li", "fadeInUp")
	delayItem(".s-regimen__img-wrap img ", "fadeInLeft")
	delayItem(".s-faq em, .s-faq strong ", "fadeInUp")
	delayItem(".s-prevalence li", "fadeInUp")
	// $(".section").each(function () {
	// var wowAnim = $(this).find(".s-symptoms ul li," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// 								wowAnim.each(function(i){
										
	// 									wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");
	// 								});
	// 								});
	$(".s-brain img").attr({'data-wow-duration':"1s", 'data-wow-delay':".5s"}).addClass("wow fadeIn")

	   var wow = new WOW({ mobile: false });
	        wow.init();
	// });
	// $(".s-factors ul").hover(function(){
	// 	$(this).find('li:nth-child(2)').animate({"opacity": 1}, 1500)
	// })
	// $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	// if('')
	$(".s-advantages__btn--js").click(function(){
		if ($(this).hasClass('s-advantages__btn--js')) {

			var elementClick = $(".last-wrapper--js");
			$(this).removeClass('s-advantages__btn--js')
			elementClick.slideDown(function(){
				$('html, body').animate({ scrollTop: elementClick.offset().top }, 1100);
			});
		}
		
	})

	//  modal window
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		tClose: 'Закрыть (Esc)',
		closeMarkup: '<div title="%title%" class="mfp-close">\
		<span class="mfp-close__text">закрыть окно</span>\
		<span class="mfp-close__icon">&#215;</span>\
		</div>',
	});

	$(".mfp-close").click(function(){
		$.magnificPopup.close();
	})

	// / modal window
});