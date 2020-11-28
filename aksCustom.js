//linked on COE, DEL DSPS, HEXS, QLoop, AI sites as of 8/22/20
jQuery(document).ready(function($) {

    //replace word home in breadcrumbs with site name
    var siteTitle = $("h1.headerTitle").text();
        if($("p.crumbs").length){
            $('p.crumbs a:first-of-type').text(siteTitle);
            $('p.crumbs').html( $('p.crumbs').html().replace(/\»/g, '›') );
        };
  
	//adding class to amy sidebar layouts used for mobile arrangement of side menu
	$(".et_pb_section.aks-sidebar").parents("body").addClass("aks-layout-sidebar");
  
    //Cooperating Teacher Training Menu
    $('.aks-ctt-menu-toggle-toggle a').on('click', function() {
          $('body').toggleClass('aks-menu-closed');
    }); 
	   
	//smoother and more accessible divi toggle
	$(".et_pb_toggle .et_pb_toggle_title").attr('tabindex', '0');
	//the function
	function aksToggle(thisObj) {
		var topToggle = thisObj.parents(".et_pb_toggle");
    	$(topToggle).find(".et_pb_toggle_content").slideToggle();
		if (!$(topToggle).hasClass("et_pb_toggle_open")) {
			$(topToggle).addClass("et_pb_toggle_open").removeClass("et_pb_toggle_close");
		} else {
			$(topToggle).removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close");
		}
     	if($(topToggle).hasClass("et_pb_accordion_item")) {
			$(topToggle).siblings('.et_pb_toggle_open').removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close").find(".et_pb_toggle_content").slideUp();
		}
	}
	//when click run function
	$(".et_pb_toggle .et_pb_toggle_title").click(function() {
		aksToggle($(this));
	});
	//when press enter run function
	$(".et_pb_toggle .et_pb_toggle_title").keypress(function(event) {
		if (event.which == 13) {
			aksToggle($(this));
    	}
	});
  
    //buttons to play and pause background video
    $("button.aks-play-video").click(function(){
      $(this).parents(".et_pb_section_video").find("video").get(0).play();
    });
    $("button.aks-pause-video").click(function(){
      $(this).parents(".et_pb_section_video").find("video").get(0).pause();
    });
    
    //excerpts for stories on division pages pulled in via rss
	var divStoryEx = $('.rss-output .body').contents().filter(function() {
		return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
	}).wrap('<span />');
	$(".rss-output .body > span:contains(… Read Story)").css("display", "none");
    $(".rss-output .body > span").each(function() {
        var str = $(this).text();
        var trimstr = $.trim(str);
        if((trimstr).startsWith("…")) {
          	$(this).css("display", "none");
        } else {
          var new_str = trimstr.substring(0, trimstr.indexOf("The post"));
          $(this).text(new_str);
        }
    });
	//images for stories on division pages pulled in via rss
  	$(".rss-output").each(function(){
		var postLink = $(this).find('.title a').attr('href');
		var postTitle = $(this).find('.title a').text();
		if ($(this).find('.imagefix img').length) {
            var postImage = $(this).find('img').attr('src');
            $(this).prepend('<div class="aks-thumb"></div>');
            $(this).find('.aks-thumb').css('backgroundImage','url('+postImage+')');
            $(this).find('.imagefix a').detach()
        }
        $(this).find('.title').text(postTitle).wrapInner("<h3></h3>");
        $(this).wrapInner('<a class="aks-post-link" href="'+postLink+'"></a>');
	});  
  
}) //end jquery
//amy
