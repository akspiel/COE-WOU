jQuery(document).ready(function($) {
//****************************
// BLOG AND POSTS
//****************************
	//BLOG add link for all categories and highlight when on blog page
	$(".aks-all-cats-mod .et_pb_widget.widget_categories > ul").prepend('<li class="cat-item"><a href="https://wou.edu/education/highlights/">All Categories</a></li>');
	$('body.blog .aks-all-cats-mod .et_pb_widget.widget_categories > ul > li:first-child.cat-item').addClass("current-cat"); 
	//BLOG replace pagination text on archive page
    jQuery(document).on('ready ajaxComplete', function () {
        $(".et_pb_ajax_pagination_container .pagination a, .archive .pagination a, .search .pagination a").html(function () {
            return $(this).html().replace('« Older Entries', 'Older Posts').replace('Next Entries »', 'Newer Posts');
        });
    });  
	// POSTS related section
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
	};
    // POST flickity for outstanding students 2020 posts
    if (($("body").hasClass("postid-11808")) || ($("body").hasClass("postid-12535"))) {
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
  
}) //end jquery
//amy
