var t = new Trianglify({noiseIntensity:0,cellsize:40});
var intro = document.getElementsByTagName("body")[0];
var pattern = t.generate(intro.clientWidth, intro.clientHeight);
$(intro).css({'background-image':pattern.dataUrl});

function logoLetters(){
		$('.letter').each(function(){
		var thisLetter = $(this);
		var lc = {};
		switch(thisLetter.data('letter'))
		{
		case 'j':
			lc.one = $('<div class="component left" />').css({'top':80+'%','height':20+'%'});
			lc.two = $('<div class="component right" />').css({'top':20+'%','height':10+'%'});
			lc.three = $('<div class="component right" />').css({'top':40+'%','height':60+'%'});
		  break;
		case 's':
			lc.one = $('<div class="component left" />').css({'top':20+'%','height':30+'%'});
			lc.two = $('<div class="component left" />').css({'top':60+'%','height':20+'%'});
			lc.three = $('<div class="component right" />').css({'top':20+'%','height':20+'%'});
			lc.four = $('<div class="component right" />').css({'top':50+'%','height':30+'%'});
		  break;
		case 'n':
			lc.one = $('<div class="component left" />').css({'top':20+'%','height':60+'%'});
			lc.two = $('<div class="component right" />').css({'top':30+'%','height':50+'%'});
		  break;
		case 'c':
			lc.one = $('<div class="component left" />').css({'top':20+'%','height':60+'%'});
			lc.two = $('<div class="component right" />').css({'top':20+'%','height':20+'%'});
			lc.three = $('<div class="component right" />').css({'top':60+'%','height':20+'%'});
		  break;
		case 'h':
			lc.one = $('<div class="component left" />').css({'top':0+'%','height':80+'%'});
			lc.two = $('<div class="component right" />').css({'top':30+'%','height':50+'%'});
		  break;
		default:

		}
		for (var key in lc){
			thisLetter.append(lc[key]);
		}
	});
	
}
logoLetters();