//custom js
//****************************
// load external share script
//****************************  
function loadjscssfile(filename, filetype){
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

//****************************
// preloader when not editing
//****************************  
jQuery(function($) {
  $("body:not(.et-fb-root-ancestor)").prepend('<div class="preloadSpinner-wrapper"><div class="preloadSpinner"></div></div>');
  $(window).load(function() {
      $("body:not(.et-fb-root-ancestor)").addClass("showReady");
      $(".preloadSpinner-wrapper").fadeOut("slow");
    });
    
//****************************
// load awesome table script on CAEP page
//****************************    
  	if($("body").hasClass("page-id-852")) {
        //awesome table script
      loadjscssfile("https://awesome-table.com/AwesomeTableInclude.js", "js")
	}
    if($("body").hasClass("single-post")) {
      loadjscssfile("https://platform-api.sharethis.com/js/sharethis.js#property=5e3e161ee2be050012065386&product=sticky-share-buttons&cms=sop", "js")
	}
});
jQuery(document).ready(function($) {
//get site name 
var siteTitle = $("h1.headerTitle").text();

//BLOG add link for all categories and highlight when on blog page
	$(".aks-all-cats-mod .et_pb_widget.widget_categories > ul").prepend('<li class="cat-item"><a href="https://wou.edu/education/highlights/">All Categories</a></li>');
	$('body.blog .aks-all-cats-mod .et_pb_widget.widget_categories > ul > li:first-child.cat-item').addClass("current-cat"); 
  
//BLOG replace pagination text on archive page
    jQuery(document).on('ready ajaxComplete', function () {
        $(".et_pb_ajax_pagination_container .pagination a, .archive .pagination a, .search .pagination a").html(function () {
            return $(this).html().replace('« Older Entries', 'Older Posts').replace('Next Entries »', 'Newer Posts');
        });
    });  
// on individual blog posts
	if($("body").hasClass("single-post")) {
      $(".aks-blog-related-mod article.et_pb_post").each(function(){
        if ($(this).find('.entry-featured-image-url').length) {
            var postImage = $(this).find('img').attr('src');
            var postLink = $(this).find('.entry-title a').attr('href');
            var postTitle = $(this).find('.entry-title').text();
            $(this).prepend('<div class="aks-thumb"></div>');
            $(this).find('.aks-thumb').css('backgroundImage','url('+postImage+')');
            $(this).find('.entry-title').text(postTitle);
            $(this).wrapInner('<a class="aks-post-link" href="'+postLink+'"></a>');
            $(this).find('.entry-featured-image-url').detach()
        }
      });
      //related posts background image
      $(".aks-blog-related-mod .ff-col-item").each(function(){
          var postURL = $(this).find('h2 a').attr('href')
          $(this).find('h2').replaceWith(function () {
            return "<h3>" + $(this).text() + "</h3>";
          });
          if ($(this).find('.aks-post-link-wrap').length) {
          } else {
            $(this).wrapInner('<a class="aks-post-link-wrap"></a>');
          }
          $(this).find('.aks-post-link-wrap').attr('href', postURL);
          if ($(this).find('.ff-item .ff-thumb').length) {
    		 var imageSRC = $(this).find('img').attr('src')
             $(this).addClass("aks-has-thumb");
             $(this).find('.aks-post-link-wrap').prepend('<div class="aks-thumb"></div>');
             $(this).find('.aks-thumb').css('backgroundImage','url('+imageSRC+')');
             $(this).find('.ff-thumb').detach()
		  }
      });
 //more accessible breadcrumbs on blog posts
      //on posts
		var pTitle = $('header .entry-title').text();
		$('#aksCrumbs').html('<p class="crumbs"><a href="https://wou.edu/education"> College of Education </a> <span class="crumb-chev">›</span> <a href="https://www.wou.edu/education/highlights/">Highlights</a> <span class="crumb-chev">›</span> ' + '<span class="crumb-current">' + pTitle + '</span></p>');
		};
// change is-checked class on buttons
  $(".filters-button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
//****************************
// flickity for outstanding students
//****************************  
if (($("body").hasClass("postid-11808")) || ($("body").hasClass("postid-12535"))) {
  console.log("i have");
	//flickity
	$.getScript('https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js', function() {
		$('.carousel').flickity({
			// options
			pageDots: false,
			cellAlign: 'left',
			wrapAround: true
		});
	});
  };
  
//****************************
// CAEP Page
//****************************
  //for buttons
  $('#caep-button-group-1 button').click(function() {
    // fetch the id of the clicked item
    var ourIDclass = $(this).attr('id');
    // reset the active class on all the buttons
    $('#caep-button-group-1 button').removeClass('active');
    // update the active state on our clicked button
    $(this).addClass('active');

      // hide all elements that don't share ourClass
      $('#ourHolder1').children('div:not(.' + ourIDclass + ')').removeClass("show-data").addClass("hide-data");
      // show all elements that do share ourClass
      $('#ourHolder1').children('div.' + ourIDclass).removeClass("hide-data").addClass("show-data");
   // return false;
  });
  $('#caep-button-group-5 button').click(function() {
    // fetch the class of the clicked item
    var ourIDclass = $(this).attr('id');
    // reset the active class on all the buttons
    $('#caep-button-group-5 button').removeClass('active');
    // update the active state on our clicked button
    $(this).addClass('active');

      // hide all elements that don't share ourClass
      $('#ourHolder5').children('div:not(.' + ourIDclass + ')').removeClass("show-data").addClass("hide-data");
      // show all elements that do share ourClass
      $('#ourHolder5').children('div.' + ourIDclass).removeClass("hide-data").addClass("show-data");
    return false;
  });

//jquery ends below
})
//amy