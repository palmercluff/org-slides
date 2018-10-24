var index = 0;

function setSlides(){
    $('#table-of-contents').addClass('slide');
    $('.outline-2').addClass('slide');
    $('#postamble').addClass('slide');
    //$('.slide').first().css('background-color', 'red');
    $('.slide').first().css('display', 'block');
}

$(document).keydown(function(e) {
    //console.log(e.keyCode);
    if (e.keyCode === 39){
	if (index + 1 === $('.slide').length){
	    console.log('Last slide!');
	    return;
	}
	index++;
	console.log(index);
	//$('.slide').eq(index).css('background-color', 'red');
	$('.slide').eq(index).css('display', 'block');
	//$('.slide').eq(index - 1).css('background-color', 'blue');
	$('.slide').eq(index - 1).css('display', 'none');
    }
    else if (e.keyCode === 37){
	if (index - 1 === -1){
	    console.log('First slide!');
	    return;
	}
	index--;
	console.log(index);
	//$('.slide').eq(index).css('background-color', 'red');
	$('.slide').eq(index).css('display', 'block');
	//$('.slide').eq(index + 1).css('background-color', 'blue');
	$('.slide').eq(index + 1).css('display', 'none');
    }
});

$(document).ready(function() {
    console.log('ready');
    setSlides();
});
