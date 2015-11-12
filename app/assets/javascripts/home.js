$(document).on('ready page:load', function() {
	$("#school_select").change( function() {
		$.ajax({
			url: window.location.origin + '/timetable/update_departments',
			dataType: "script",
			data: $("#school_select").serialize()
		});
		$('#lecture-container-body').empty();
	
		$.ajax({
			url: window.location.origin + '/timetable/update_classifications',
			dataType: "json",
			data: $("#school_select").serialize(),
			success: function(data){
				var str = '';
				for(var i = 0; i< data.length; i++ ){
					// below input codes must be changed to Ruby
					str += '<li>'
						+ '<input type="checkbox" value=' + data[i].id 
						+ ' name="classification[' + data[i].id + ']"'
						+ ' id="classification_' + data[i].id 
						+ '" class="classification_select"/>'
						+ '<label for="classification_'+ data[i].id + '">' + data[i].classification_name
						+ '</label>'
						+ '</li>';
					}
				$('#classification-container-body').html(str);
			}
		});
	});

	$("#department_select").change( function() {
		$.ajax({
			url: window.location.origin + '/timetable/update_lectures_by_department',
			dataType: "json",
			data: $("#department_select").serialize(),
			success: function(data){
				var str = '';
				for(var i = 0; i < data.length; i++) {
					str += '<li>'  
						+ '<span>'+data[i].lecture_name+'<span>' 
						+ '</li>';
				}
				$('#lecture-container-body').html(str);
			}
		});
	});

	$("#classification-container-body").on('change', '.classification_select', function() {
		$.ajax({
			url: window.location.origin + '/timetable/update_lectures_by_classification',
			dataType: "json",
			data: $(".classification_select").serialize(),
			success: function(data){
				var str = '';
				for(var i = 0; i < data.length; i++) {
					str += '<li>'
						+ '<span>'+data[i].lecture_name+'</span>'
						+ '</li>';
				}
				$('#lecture-container-body').html(str);
			}
		});
	});
});
