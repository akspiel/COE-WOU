//linked on COE, DEL DSPS, HEXS, AI sites as of 8/11/20
jQuery(document).ready(function($) {
    //get site name 
	var siteTitle = $("h1.headerTitle").text();
  
	//adding class to amy sidebar layouts used for mobile arrangement of side menu
	$(".et_pb_section.aks-sidebar").parents("body").addClass("aks-layout-sidebar");
  
  	//more accessible breadcrumbs
     if($("p.crumbs").length){
		$('p.crumbs a:first-of-type').text(siteTitle);
        $("p.crumbs a").each(function() {
          var xspace = $(this).text().replace(/\s»/g, "").trim();
          $(this).text(xspace);
        })
        var elems = $( "p.crumbs" ).html();
        var arr = elems.split('»');
        var aksCrumbs = "";
        $('<div class="aks-crumbs" aria-label="breadcrumbs"><ol>' + aksCrumbs + '</ol></div>').insertAfter("body:not(.home) #pageHeader");
        $listSelector = $(".aks-crumbs ol") 
        aksCrumbs = $.each(arr, function(i, obj) {
            $listSelector.append("<li>"+obj+"</li>")
        }); 
	};
	//smoother and more accessible divi toggle
	$(".et_pb_toggle").attr('tabindex', '0');
	//when click
	$(".et_pb_toggle").click(function() {
		if (!$(this).hasClass("et_pb_toggle_open")) {
			$(this).addClass("et_pb_toggle_open")
		} else {
			$(this).removeClass("et_pb_toggle_open")
		}
	});
	//when press enter
	$(".et_pb_toggle").keypress(function(event) {
		if (event.which == 13) {
            $(this).find(".et_pb_toggle_content").slideToggle();
			if (!$(this).hasClass("et_pb_toggle_open")) {
				$(this).addClass("et_pb_toggle_open").removeClass("et_pb_toggle_close")
			} else {
				$(this).removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close")
			}
        }
	});
  
}) //end jquery
//amy