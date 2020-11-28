jQuery(function ($) {
  //on degree timeline pages
    $('.aks-timeline-btn-b a').click(function(){
		var link = $(this).attr('href');
		var courseList = '#course-list';
		if ((link == courseList) && (($(this).hasClass("see-year-1")) || ($(this).hasClass("see-year-2"))) ) {
			$('.et_pb_tabs_controls li.et_pb_tab_0 a').trigger("click");					
		}
		if ((link == courseList) && ($(this).hasClass("see-year-3"))) {
			$('.et_pb_tabs_controls li.et_pb_tab_1 a').trigger("click");					
		}
		if ((link == courseList) && ($(this).hasClass("see-year-4"))) {
			$('.et_pb_tabs_controls li.et_pb_tab_2 a').trigger("click");					
		}
    });
});
