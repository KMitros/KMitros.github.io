$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle()
		return false;
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".arrow-down").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});

	$(".tothetop").click(function() {
		$("html, body").animate({ scrollTop: 0}, "slow");
		return false;
	});

	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".homesect.section_8 .p").animated("fadeIn");
	

	$(".section_2").waypoint(function() {
		$(".s2-item-wrap").each(function(index) { 
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 150*index);
		});
	},{
		offset: "30%"

	});


	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) { 
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 150*index);
		});
	},{
		offset: "35%"

	});		

	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) { 
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});	
			
	}, {
		offset : "20%"
	
	});

	$(".section_5").waypoint(function() {

		$(".section_5 .tc-item").each(function(index) { 
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg" + index	
				});
				ths.removeClass("").addClass("");
			}, 500*index);
			
		});	
			this.destroy();
	}, {
		offset : "50%"

	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText: "",
		loop : true,
		autoplay: true,
		autoplayHoverPause : true,
		fluidSpeed : 500,
		autoplaySpeed : 500,
		navSpeed : 500, 
		dragEndSpeed : 500
	});



	var waypoint = new Waypoint({
 	 element: document.getElementsByClassName('section_8'),
 	 handler: function(direction) {
 	 }
	});

	$('.homesect .section-bottom .buttons').click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
 		 type:'inline',
 		 mainClass: "mfp-forms"
	});

});



$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


