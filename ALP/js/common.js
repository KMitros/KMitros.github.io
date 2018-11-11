$(function() {

		$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"))
	});

	$(".service-item h4").equalHeights();
	$(".news-item-text").equalHeights();
	$(".link-item").equalHeights();


	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});

	var owl = $(".slider");
	owl.owlCarousel({
		items: 1,
		loop: true,
		itemClass: "slide-wrap",
		nav: true,
		navText: ""
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});


	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions: ['theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: "Menu"
		}
	});

	var apip = $("#my-menu").data("mmenu");
	apip.bind("closed", function() {
		$(".toggle-mnu").removeClass("on");
	});


	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
