var main = function () {
	$('.main').on('click', 'div[class^=right4]', function () {
		$('div[class^=right4]').removeClass('active');
		$(this).addClass('active');
	}); 
	$('.arrow-left').click(function() { 
		var firstSl=$('.firsted');
		var nextSl=firstSl.next();
		var thirdSl=$('.thirded');
		var nextSlInEnd=thirdSl.next();
		if(nextSlInEnd.hasClass('arrow'))
			{}
		else {
		$('.img').animate({left:"-=90px"},90);
		$('.firsted').addClass('hiddened');
		$('.hiddened').removeClass('firsted');
		thirdSl.removeClass('thirded');
		nextSl.addClass('firsted');
		nextSlInEnd.addClass('thirded');
		$('.thirded').removeClass('hiddened').addClass('unhiddened');
		}
	});
	$('.arrow-right').click(function() {
		var firstSl=$('.firsted');
		var prevSl=firstSl.prev();
		var thirdSl=$('.thirded');
		var prevSlInEnd=thirdSl.prev();
		if(prevSl.hasClass('arrow'))
			{}
		else {
		$('.img').animate({left:"+=90px"},90);
		prevSl.removeClass('hiddened');
		prevSl.addClass('firsted');
		firstSl.removeClass('firsted');
		$('.thirded').removeClass('unhiddened').addClass('hiddened');
		thirdSl.removeClass('thirded');
		prevSlInEnd.addClass('thirded');
		}
	})
}
$(document).ready(main);