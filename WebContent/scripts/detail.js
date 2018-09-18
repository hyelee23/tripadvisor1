function getDetail(id) {
	var url = 'https://javascript-basic.appspot.com/locationDetail';
	$.getJSON(url, {
		id : id
	}, function(r) {
		$('.detail-header-name').html(r.name);
		$('.detail-header-city-name').html(r.cityName);
		$('.detail-desc-text').html(r.desc);
		var $gallery = $('#detail-images');
		var images = r.subImageList;
		for (var i = 0; i < images.length; i++) {
			var $image = $('<img src="' + images[i] + '" />');
			$gallery.append($image);
		}
		Galleria.loadTheme('libs/galleria/themes/classic/galleria.classic.min.js');
		Galleria.run('#detail-images');
	});
}